from django.contrib import admin

# Register your models here.

from .models import Category_tag ,Skilled_tag,Looking_for,Projects

@admin.register(Category_tag)
class CategoryTagAdmin(admin.ModelAdmin):
    list_display=['name','slug']
    search_fields = ['name']
    prepopulated_fields = {'slug' :('name',)}
    
@admin.register(Skilled_tag)
class SkilledTagAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    search_fields = ['name']
    prepopulated_fields = {'slug':('name',)}
    
@admin.register(Looking_for)
class LookingForAdmin(admin.ModelAdmin):
    list_display=['name','slug']
    search_fields=['name']
    prepopulated_fields= {'slug':('name',)}
    
@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ['project_title', 'tags', 'created_at']
    list_filter=['tags']
    search_fields=['project_title']
    filter_horizontal = ['category_tags', 'skilled_tags', 'looking_for']  
