"""
URL configuration for backend project.

"""
from django.contrib import admin
from django.urls import include, path
from . import views
from backend.views import presignedUploadURLView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.home,name='home'),
    path('', include('accounts.urls')), 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('',include('projects.urls')),
    path('api/upload/presignedurl/',presignedUploadURLView.as_view(),name='file_upload')
]
