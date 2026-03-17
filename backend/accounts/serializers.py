from rest_framework import serializers
from .models import UserProfile ,User

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['bio', 'skills', 'github_url', 'linkedin_url', 'twitter_url', 'website']


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    
    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'profile_picture', 'profile']
