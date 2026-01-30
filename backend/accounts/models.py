from django.db import models

# models for : User , DeveloperProfile ,SocialAuth ,UserSkill , UserPreferences 

'''
 devprofile ->  ( timezone , availabilty , techstack , bio  ) 
 userprefrences -> matching , notificaiton 
 # for auth i will use google auth : name and email
'''

class CustomUser(models.Model):
    full_name = models.CharField(max_length=50)
    

