from django.db import transaction
from django.utils import timezone
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime, timedelta
from django.conf import settings
from .models import User, UserProfile
import os 

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
@transaction.atomic
def google_auth(request):
    """
    verify google token and create/update user in database
    """
    token = request.data.get('credential') # gets the google jwttoken from the request
    
    if not token:
        return Response(
            {'error':'No token provided'},
            status=status.HTTP_400_BAD_REQUEST
        )
        
    try:
        # verify the google token
        user_data = id_token.verify_oauth2_token(
            token,
            requests.Request(),
            os.environ.get('GOOGLE_OAUTH_CLIENT_ID')
        )
        
        #extract user info from google
        google_id = user_data.get('sub')
        email=user_data.get('email')
        full_name =user_data.get('name','')
        profile_picture = user_data.get('picture', '')
        
        if not email:
            return Response(
                {'error': 'email not provided by google'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        #try to find existing user by google ID or email
        user=None
        is_new_user=False
        
        # firstly find using googleid
        if google_id:
            try:
                user=User.objects.get(google_id=google_id)
            except User.DoesNotExist:
                pass
        
        # if not found by googleid try by email
        if not user:
            try:
                user =User.objects.get(email=email)
                # if user exists but doesnt have google id, update it
                if not user.google_id and google_id:
                    user.google_id = google_id
            except User.DoesNotExist:
                #create new user
                user = User.objects.create_user(
                    email=email,
                    google_id=google_id,
                    full_name=full_name,
                    profile_picture=profile_picture,
                )
                is_new_user=True
                
        #update user info
        user.full_name = full_name or user.full_name
        user.profile_picture=profile_picture or user.profile_picture
        user.last_login =timezone.now()
        user.save()
        
        #create or update profiel
        profile,profile_created = UserProfile.objects.get_or_create(user=user)
        
        # generate jwt token using simplejwt
        refresh = RefreshToken.for_user(user)
        
        #custom claims
        refresh['email'] = user.email
        refresh['google_id'] = google_id
        
        #prepare response data
        response_data = {
          'user':{  
            'id':str(user.id),
            'email':user.email,
            'full_name':user.full_name,
            'profile_picture':user.profile_picture,
            'date_joined': user.date_joined.isoformat(),
        },
          'is_new_user':is_new_user
        }
        
        response =  Response(response_data,status=status.HTTP_200_OK)
        response.set_cookie(
            key='access_token',
            value=str(refresh.access_token),
            httponly=True,
            secure=settings.SECURE_COOKIE,
            samesite='Lax',
            max_age=3600,
            path='/'
        )
        
        response.set_cookie(
            key='refresh_token',
            value=str(refresh),
            httponly=True,
            secure=settings.SECURE_COOKIE,
            samesite='Lax',
            max_age= 604800,
            path='/'
        )
        
        return response
        
    except ValueError as e:
        return Response(
            {'error':'invalid google token','details': str(e)},
            status=status.HTTP_401_UNAUTHORIZED
        )
    except Exception as e:
        print(f"google auth error:{str(e)}")
        return Response(
            {'error':'authentication failed'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(['POST'])
@permission_classes([AllowAny])
def refresh_token(request):
    """refresh access token using refresh token from cookie"""
    refresh_token = request.COOKIES.get('refresh_token')
    
      # DEBUG
    # print("All cookies:", request.COOKIES)
    # print("Refresh token:", refresh_token)
    
    if not refresh_token:
        return Response(
            {'error':'Refresh token not found'},
            status=status.HTTP_401_UNAUTHORIZED
        )
        
    try:
        refresh = RefreshToken(refresh_token)
        access_token = str(refresh.access_token)
        
        response = Response({'message':'Token refreshed'})
        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=True,
            samesite='Lax',
            max_age=3600,
            path='/'
        )
        return response
    except Exception as e:
        return Response(
            {'error': 'Invalid refresh token'},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    """logout user by clearing cookies"""
    response = Response({'message': 'Logged out successful'})
    response.delete_cookie('access_token')
    response.delete_cookie('refresh_token')
    return response
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    """ get current user's full profile """
    user = request.user

    profile_data = {
        'id':str(user.id),
        'email':user.email,
        'full_name':user.full_name,
        'profile_picture':user.profile_picture,
        'date_joined': user.date_joined.isoformat(),
        'last_login': user.last_login.isoformat() if user.last_login else None,

    }   
    
    if hasattr(user,'profile'):
       profile_data.update({
        'bio': user.profile.bio,
        'date_of_birth': user.profile.date_of_birth.isoformat() if user.profile.date_of_birth else None,
        'gender': user.profile.gender,
        'city':user.profile.city,
        'country': user.profile.country,
        'website': user.profile.website,
        'github_url': user.profile.github_url,
        'twitter_url': user.profile.twitter_url,
       })
    
    return Response(profile_data)

#  list users, get user by ID, update user account settings
# bio, skills, experience, portfolio links, social media, preferences, availability status