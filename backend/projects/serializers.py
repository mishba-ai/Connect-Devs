from rest_framework import serializers
from .models import Projects, Category_tag, Skilled_tag, Looking_for, TAG_CHOICES


class CategoryTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_tag
        fields = ["id", "name", "slug"]

class SkilledTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skilled_tag
        fields = ["id", "name", "slug"]

class LookingForSerializer(serializers.ModelSerializer):
    class Meta:
        model = Looking_for
        fields = ["id", "name", "slug"]

class ProjectsSerializer(serializers.ModelSerializer):
    category_tags = CategoryTagSerializer(many=True, read_only=True)
    skilled_tags = SkilledTagSerializer(many=True, read_only=True)
    looking_for = LookingForSerializer(many=True, read_only=True)

    category_tags_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category_tag.objects.all(),
        write_only=True,
        source="category_tags",
    )

    skilled_tag_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Skilled_tag.objects.all(),
        write_only=True,
        source="skilled_tags",
    )

    looking_for_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Looking_for.objects.all(),
        write_only=True,
        source="looking_for",
    )

    class Meta:
        model = Projects
        fields = [
             'id',
            'project_title',
            'tags',
            'project_thumbnail',
            'category_tags',   
            'skilled_tags',   
            'looking_for',    
            'category_tags_ids',
            'skilled_tag_ids',
            'looking_for_ids', 
            'created_at',
            'updated_at',
        ]

        read_only_fields = ["created_at", "updated_at"]

