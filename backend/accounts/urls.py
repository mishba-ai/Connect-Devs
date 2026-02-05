from django.urls import path
from . import views

urlpatterns = [
    path('auth/google/', views.google_auth, name='google_auth'),
    path('auth/logout/', views.logout, name='logout'),
    path('auth/refresh/', views.refresh_token, name='refresh_token'),
    # path('user/profile/', views.get_user_profile, name='user_profile'),
]