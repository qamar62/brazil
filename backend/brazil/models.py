from django.db import models
from django.core.validators import URLValidator, MinValueValidator
from django.utils import timezone

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

class Option(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price_adjustment = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return self.name

class EventImage(models.Model):
    event = models.ForeignKey('Event', related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='event_images/')
    alt_text = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return f"Image for {self.event.name} - {self.title}"

class ItineraryDay(models.Model):
    event = models.ForeignKey('Event', related_name='itinerary_days', on_delete=models.CASCADE)
    day = models.PositiveIntegerField()
    title = models.CharField(max_length=200)
    description = models.TextField()
    short_detail = models.CharField(max_length=200, help_text="Brief description for timeline view")

    class Meta:
        ordering = ['day']
        unique_together = ['event', 'day']

    def __str__(self):
        return f"Day {self.day} - {self.title}"

class Event(models.Model):
    AVAILABILITY_CHOICES = [
        ('available', 'Available'),
        ('limited', 'Limited Spots'),
        ('sold_out', 'Sold Out'),
        ('upcoming', 'Upcoming'),
    ]

    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    detail = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    date_start = models.DateTimeField()
    date_end = models.DateTimeField()
    
    # Additional useful fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    availability_status = models.CharField(
        max_length=20,
        choices=AVAILABILITY_CHOICES,
        default='upcoming'
    )
    max_participants = models.PositiveIntegerField(default=20)
    current_participants = models.PositiveIntegerField(default=0)
    options = models.ManyToManyField(Option, related_name='events', blank=True)
    is_featured = models.BooleanField(default=False)
    slug = models.SlugField(unique=True)

    class Meta:
        ordering = ['date_start']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Ensure date_end is after date_start
        if self.date_end and self.date_start and self.date_end < self.date_start:
            raise ValueError("End date must be after start date")
        
        # Update availability status based on participants
        if self.current_participants >= self.max_participants:
            self.availability_status = 'sold_out'
        elif self.current_participants >= (self.max_participants * 0.8):
            self.availability_status = 'limited'
        elif self.date_start > timezone.now():
            self.availability_status = 'upcoming'
        else:
            self.availability_status = 'available'

        super().save(*args, **kwargs)

    @property
    def duration_days(self):
        if self.date_start and self.date_end:
            return (self.date_end - self.date_start).days + 1
        return 0

    @property
    def spots_left(self):
        return max(0, self.max_participants - self.current_participants)

    @property
    def is_active(self):
        now = timezone.now()
        return self.date_start <= now <= self.date_end
