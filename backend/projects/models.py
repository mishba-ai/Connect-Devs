from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings
TAG_CHOICES = [
    ("open", "Open"),
    ("closed", "Closed"),
    ("in_progress", "In progress"),
    ("on_hold", "On hold"),
]

class Category_tag(models.Model):
    name = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(max_length=150, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Skilled_tag(models.Model):
    name = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(max_length=150, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Looking_for(models.Model):
    name = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(max_length=150, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Projects(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="projects",
        null=True,
        blank=True
    )
    project_title = models.TextField()
    tags = models.CharField(max_length=20, choices=TAG_CHOICES, default="open")
    project_thumbnail = models.URLField(max_length=500, blank=True)
    
    description = models.TextField(max_length=400 , blank=True)
    category_tags = models.ManyToManyField(Category_tag, related_name="projects")
    skilled_tags = models.ManyToManyField(Skilled_tag, related_name="projects")
    looking_for = models.ManyToManyField(Looking_for, related_name="projects")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]