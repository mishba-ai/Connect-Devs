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
    id = models.UUIDField(primary_key=True,db_index=True)
