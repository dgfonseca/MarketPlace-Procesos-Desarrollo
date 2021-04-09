from django.urls import path
from .views.login import login_view

urlpatterns = [
    path(r'login/', login_view),
]
