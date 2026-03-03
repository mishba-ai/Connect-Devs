from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User,UserProfile

# Register your models here.
class CustomUserAdmin(UserAdmin):
    list_display=('email','full_name','is_staff','is_active','date_joined')
    list_filter =('is_staff','is_active','date_joined')
    search_fields=('email','full_name')
    ordering=('-date_joined',)
    
    fieldsets=(
        (None,{'fields':('email','password')}),
        ('Personal Info',{'fields':('full_name','profile_picture')}),
        ('Google Info', {'fields': ('google_id',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets =(
        (None,{
            'classes':('wide',),
            'fields': ('email', 'password1','password2', 'is_staff', 'is_active')}
        ),
    )
    
    readonly_fields=('date_joined','last_login')
    
admin.site.register(User,CustomUserAdmin)
admin.site.register(UserProfile)