from django.shortcuts import render
from rest_framework import viewsets
from .models import HeroModification, Settings
from .serializers import HeroModificationSerializer, SettingsSerializer
from drf_spectacular.utils import extend_schema

# Create your views here.

@extend_schema(tags=['Hero'])
class HeroModificationViewSet(viewsets.ModelViewSet):
    queryset = HeroModification.objects.all()
    serializer_class = HeroModificationSerializer

@extend_schema(tags=['Settings'])
class SettingsViewSet(viewsets.ModelViewSet):
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
