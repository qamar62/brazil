from rest_framework import serializers
from .models import HeroModification, Settings

class HeroModificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroModification
        fields = (
            'id', 'image',
            'heading_en', 'text_en',
            'heading_pt', 'text_pt'
        )

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = (
            'id',
            'site_name_en', 'site_name_pt',
            'logo', 'favicon',
            'contact_email', 'phone_number',
            'address_en', 'address_pt',
            'facebook_url', 'instagram_url',
            'twitter_url', 'youtube_url',
            'whatsapp_number',
            'footer_text_en', 'footer_text_pt',
            'copyright_text_en', 'copyright_text_pt',
            'meta_description_en', 'meta_description_pt',
            'meta_keywords_en', 'meta_keywords_pt',
            'google_analytics_id'
        )
