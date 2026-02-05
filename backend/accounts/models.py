from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.utils import timezone
import uuid

# models for : User , DeveloperProfile ,SocialAuth ,UserSkill , UserPreferences 

'''
 devprofile ->  ( timezone , availabilty , techstack , bio  ) 
 userprefrences -> matching , notificaiton 
 # for auth i will use google auth : name and email
'''

class CustomUserManager(BaseUserManager):
    def create_user(self , email ,password =None ,**extra_fields) :
        """
        For Google OAuth users, password can be None.
        """
        if not email:
            raise ValueError('The email value must be set')
        
        email = self.normalize_email(email) 
        user = self.model(email=email,**extra_fields)
        
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
            
        user.save(using =self._db)
        return user 
    
    def create_superuser(self,email,password=None,**extra_fields):
        """
        Creates and saves a superuser with the given email and password.
        Superusers must have a password.
        """
        
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)      
        extra_fields.setdefault('is_active',True)      
        
        if extra_fields.get('is_staff') is not True :
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True :
            raise ValueError('Superuser must have is_superuser=True.')
        
        if not password:
            raise ValueError('Superuser must have password.')
        
        return self.create_user(email ,password=password,**extra_fields)

class User(AbstractBaseUser,PermissionsMixin) :
    #primary key in using uuid
    id = models.UUIDField(primary_key=True,default=uuid.uuid4 , editable=False)
    email = models.EmailField(unique=True )
    full_name = models.CharField(max_length=100,blank=True)
    google_id = models.CharField(max_length=255,unique=True,null=True,blank=True)
    
    # User uploaded (optional, for when they want to change it)
    profile_picture = models.URLField(max_length=500, blank=True)
        
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    
    # Timestamps
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Permissions
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    class Meta:
        ordering = ['-date_joined']
        indexes = [
            models.Index(fields = ['email']),
            models.Index(fields = ['google_id']),
        ]
    
    def __str__(self):
        return self.email
    
    @property
    def display_name(self):
        """Returns fullname if available, otherwise email prefix"""
        return self.fullname or self.email.split('@')[0]
    def get_profile_picture(self):
        return self.profile_picture.url if self.profile_picture else self.google_profile_picture  
    
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True)

    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=20, blank=True, choices=[
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
        ('prefer_not_to_say', 'Prefer not to say'),
    ])
    
    # Contact info
    city = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
        
    # Social links
    website = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
        
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.email}'s Profile"