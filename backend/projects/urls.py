from django.urls import path
from . import views

urlpatterns = [
    path('api/create_project/', views.launch_proj , name='launch_project'),
    # path('api/list_projects/',views.get_proj_list,name='list_project'),
    path('api/looking_for/',views.looking_for,name='looking_for'),
    path('api/skills/',views.get_skills,name='looking_for'),
    path('api/categories/',views.get_categories,name='looking_for'),
    path('api/get_projects_lists/',views.get_projects_list,name='get_projects_list'),   
    path('api/latest_proj/',views.get_latest_user_project,name='latest_proj')
    
]

