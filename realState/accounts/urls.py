from django.urls import path
from .views import SignupView
from .views import UserAPI

urlpatterns=[
    path('signup/',SignupView.as_view()),
    path('user/',UserAPI.as_view()),
]