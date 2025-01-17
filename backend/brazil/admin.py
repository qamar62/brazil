from django.contrib import admin
from django.utils.html import format_html
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import (
    HeroModification, 
    Settings,
    Event,
    EventImage,
    ItineraryDay,
    Option
)

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
                'favicon',
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

class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 1
    fields = ('image', 'title', 'alt_text', 'description', 'is_featured')
    readonly_fields = ('image_preview',)

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 50px;"/>', obj.image.url)
        return "No image"
    image_preview.short_description = 'Preview'

class ItineraryDayInline(admin.TabularInline):
    model = ItineraryDay
    extra = 1
    fields = ('day', 'title', 'description', 'short_detail')
    ordering = ('day',)
    min_num = 1
    validate_min = True

@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
    list_display = ('name', 'price_adjustment')
    search_fields = ('name',)
    list_filter = ('price_adjustment',)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'price', 'date_start', 'date_end', 
                   'availability_status', 'spots_left', 'is_featured')
    list_filter = ('availability_status', 'is_featured', 'location')
    search_fields = ('name', 'location', 'detail')
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ('created_at', 'updated_at', 'spots_left', 'duration_days')
    filter_horizontal = ('options',)
    date_hierarchy = 'date_start'
    
    inlines = [ItineraryDayInline, EventImageInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'location', 'detail', 'price')
        }),
        ('Dates and Availability', {
            'fields': (
                'date_start', 'date_end', 'availability_status',
                'max_participants', 'current_participants'
            )
        }),
        ('Options and Features', {
            'fields': ('options', 'is_featured')
        }),
        ('System Information', {
            'classes': ('collapse',),
            'fields': ('created_at', 'updated_at', 'spots_left', 'duration_days')
        }),
    )

    def spots_left(self, obj):
        spots = obj.spots_left
        if spots <= 0:
            return format_html('<span style="color: red;">Sold Out</span>')
        elif spots < 5:
            return format_html('<span style="color: orange;">{} spots</span>', spots)
        return format_html('<span style="color: green;">{} spots</span>', spots)
    spots_left.short_description = 'Available Spots'

    def get_inline_instances(self, request, obj=None):
        inline_instances = super().get_inline_instances(request, obj)
        if obj is None:  # This is an add form
            # Remove ItineraryDayInline when adding new event
            inline_instances = [inline for inline in inline_instances 
                              if not isinstance(inline, ItineraryDayInline)]
        return inline_instances

    def save_model(self, request, obj, form, change):
        is_new = obj.pk is None
        obj.save()
        
        if is_new:
            # Create default 4 days itinerary regardless of actual duration
            default_days = 4
            default_itineraries = [
                {
                    'day': 1,
                    'title': 'Day 1: Arrival & Welcome',
                    'description': 'Arrival at destination, check-in, and welcome activities',
                    'short_detail': 'Arrival & Welcome'
                },
                {
                    'day': 2,
                    'title': 'Day 2: Main Activities',
                    'description': 'Full day of main activities and attractions',
                    'short_detail': 'Main Activities'
                },
                {
                    'day': 3,
                    'title': 'Day 3: Exploration',
                    'description': 'Exploring local attractions and culture',
                    'short_detail': 'Exploration'
                },
                {
                    'day': 4,
                    'title': 'Day 4: Departure',
                    'description': 'Final activities and departure arrangements',
                    'short_detail': 'Departure'
                }
            ]
            
            for day_info in default_itineraries:
                ItineraryDay.objects.create(
                    event=obj,
                    day=day_info['day'],
                    title=day_info['title'],
                    description=day_info['description'],
                    short_detail=day_info['short_detail']
                )

    def response_add(self, request, obj, post_url_continue=None):
        # After saving a new event, redirect to the change form
        return HttpResponseRedirect(
            reverse('admin:brazil_event_change', args=[obj.pk])
        )

@admin.register(EventImage)
class EventImageAdmin(admin.ModelAdmin):
    list_display = ('event', 'title', 'image_preview', 'is_featured')
    list_filter = ('event', 'is_featured')
    search_fields = ('title', 'alt_text', 'description')
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 50px;"/>', obj.image.url)
        return "No image"
    image_preview.short_description = 'Preview'

@admin.register(ItineraryDay)
class ItineraryDayAdmin(admin.ModelAdmin):
    list_display = ('event', 'day', 'title')
    list_filter = ('event',)
    search_fields = ('title', 'description')
    ordering = ('event', 'day')
