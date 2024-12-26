from django.contrib import admin
from .models import HeroModification, Settings

# Register your models here.

@admin.register(HeroModification)
class HeroModificationAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Image', {
            'fields': ('image',)
        }),
        ('English Content', {
            'fields': ('heading_en', 'text_en')
        }),
        ('Portuguese Content', {
            'fields': ('heading_pt', 'text_pt')
        }),
    )
    list_display = ('heading_en', 'heading_pt')
    search_fields = ('heading_en', 'heading_pt', 'text_en', 'text_pt')

@admin.register(Settings)
class SettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Basic Information', {
            'fields': (
                ('site_name_en', 'site_name_pt'),
                'logo', 
                'favicon'
            )
        }),
        ('Contact Information', {
            'fields': (
                'contact_email',
                'phone_number',
                'address_en',
                'address_pt'
            )
        }),
        ('Social Media', {
            'fields': (
                'facebook_url',
                'instagram_url',
                'twitter_url',
                'youtube_url',
                'whatsapp_number'
            )
        }),
        ('Footer Content', {
            'fields': (
                'footer_text_en',
                'footer_text_pt',
                'copyright_text_en',
                'copyright_text_pt'
            )
        }),
        ('SEO', {
            'fields': (
                'meta_description_en',
                'meta_description_pt',
                'meta_keywords_en',
                'meta_keywords_pt'
            )
        }),
        ('Analytics', {
            'fields': ('google_analytics_id',)
        }),
    )
    
    list_display = ('site_name_en', 'contact_email', 'phone_number')
    search_fields = ('site_name_en', 'site_name_pt', 'contact_email', 'phone_number')
    
    def has_add_permission(self, request):
        # Check if there's already a Settings object
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)
