from django.db import models
from django.core.validators import URLValidator

class HeroModification(models.Model):
    image = models.ImageField(upload_to='hero_images/')
    # English fields
    heading_en = models.CharField(max_length=255, verbose_name="Heading (English)")
    text_en = models.TextField(verbose_name="Text (English)")
    # Portuguese fields
    heading_pt = models.CharField(max_length=255, verbose_name="Heading (Portuguese)")
    text_pt = models.TextField(verbose_name="Text (Portuguese)")

    def __str__(self):
        return self.heading_en

class Settings(models.Model):
    # Basic Info
    site_name_en = models.CharField(max_length=100, default="Brazil Travel", verbose_name="Site Name (English)")
    site_name_pt = models.CharField(max_length=100, default="Viagem ao Brasil", verbose_name="Site Name (Portuguese)")
    logo = models.ImageField(upload_to='logos/')
    favicon = models.ImageField(upload_to='logos/', null=True, blank=True)
    
    # Contact Information
    contact_email = models.EmailField()
    phone_number = models.CharField(max_length=20, blank=True)
    address_en = models.TextField(blank=True, verbose_name="Address (English)")
    address_pt = models.TextField(blank=True, verbose_name="Address (Portuguese)")
    
    # Social Media
    facebook_url = models.URLField(max_length=255, blank=True)
    instagram_url = models.URLField(max_length=255, blank=True)
    twitter_url = models.URLField(max_length=255, blank=True)
    youtube_url = models.URLField(max_length=255, blank=True)
    whatsapp_number = models.CharField(max_length=20, blank=True)
    
    # Footer Information
    footer_text_en = models.TextField(blank=True, verbose_name="Footer Text (English)")
    footer_text_pt = models.TextField(blank=True, verbose_name="Footer Text (Portuguese)")
    copyright_text_en = models.CharField(max_length=255, blank=True, verbose_name="Copyright Text (English)")
    copyright_text_pt = models.CharField(max_length=255, blank=True, verbose_name="Copyright Text (Portuguese)")
    
    # SEO
    meta_description_en = models.TextField(blank=True, verbose_name="Meta Description (English)")
    meta_description_pt = models.TextField(blank=True, verbose_name="Meta Description (Portuguese)")
    meta_keywords_en = models.CharField(max_length=255, blank=True, verbose_name="Meta Keywords (English)")
    meta_keywords_pt = models.CharField(max_length=255, blank=True, verbose_name="Meta Keywords (Portuguese)")
    
    # Analytics
    google_analytics_id = models.CharField(max_length=50, blank=True)
    
    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"
    
    def __str__(self):
        return self.site_name_en
