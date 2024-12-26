from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HeroModificationViewSet, SettingsViewSet

router = DefaultRouter()
router.register('hero', HeroModificationViewSet)
router.register('settings', SettingsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]