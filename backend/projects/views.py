from django.db import transaction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from google.auth.transport import requests
from .serializers import (
    ProjectsSerializer,
    CategoryTagSerializer,
    LookingForSerializer,
    SkilledTagSerializer,
)
from rest_framework import generics
from .models import Projects, Looking_for, Skilled_tag, Category_tag

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def launch_proj(request):
    serializer = ProjectsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([AllowAny])
def get_proj_list(request):
    queryset = Projects.objects_all().prefetch_related(
        "category_tags", "skilled_tags", "looking_for"
    )
    serializer = ProjectsSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([AllowAny])
def looking_for(request):
    queryset = Looking_for.objects.all()
    serializer = LookingForSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([AllowAny])
def get_skills(request):
    queryset = Skilled_tag.objects.all()
    serializer = SkilledTagSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([AllowAny])
def get_categories(request):
    queryset = Category_tag.objects.all()
    serializer = CategoryTagSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([AllowAny])
# show all the project list 
def get_projects_list(request):
    queryset = Projects.objects.all()
    serializer = ProjectsSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
# get latest top 4 projects from the authenticated user to show their respective projects in the profile
def get_latest_user_project(request):
    queryset = Projects.objects.filter(owner=request.user).order_by('-created_at')[:4]
    serializer = ProjectsSerializer(queryset,many= True)
    return Response(serializer.data , status = status.HTTP_200_OK) 