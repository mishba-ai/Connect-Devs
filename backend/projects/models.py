from django.db import models
from django.contrib.postgres.fields import ArrayField

TAG_CHOICES = [
        ('open','Open'),
        ('closed','Closed'),
        ('in_progress','In progress'),
        ('on_hold','On hold')
    ]
CATEGORY_TAGS = [
    ('hackathon', 'Hackathon Project'),
    ('side_project', 'Side Project'),
    ('open_source', 'Open Source'),
    ('ai', 'AI'),
    ('ml', 'ML'),
    ('web3', 'Web3'),
    ('blockchain', 'Blockchain'),
    ('mobile', 'Mobile App'),
    ('web', 'Web App'),
    ('devtools', 'Developer Tools'),
    ('iot', 'IoT'),
    ('game', 'Game Development'),
    ('data', 'Data Science'),
    ('cloud', 'Cloud'),
    ('security', 'Security'),
    ('ui_ux', 'UI/UX'),
]
SKILLS_REQUIRED = [
    ''
]
class Category_tag(models.Model):
    name = models.CharField(max_length =250, unique=True)
    slug=models.SlugField(max_length=150 , unique=True)
    class Meta:
        ordering=['name'] 
    def __str__(self):
        return self.name 
   
        
class Projects(models.Model):
    project_title = models.TextField()
    tags = models.CharField(
        max_length=20,
        choices=TAG_CHOICES,
        default='open'
    )
    project_thumbnail = models.URLField(max_length=500, blank=True)
    category_tags = models.ManyToManyField(
        Category_tag,
        related_name='projects'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    