from django.urls import path
from .views import AudioTranscriptionView, front_end

urlpatterns = [
    path('transcribe/', AudioTranscriptionView.as_view(), name='audio-transcribe'),
    path('front_end/', front_end, name='front_end'),
]
