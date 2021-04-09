from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from ..models.user import User, UserManager
from ..models.productor import Productor


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        jsonUser = json.loads(request.body)
        email = jsonUser['email']
        password = jsonUser['password']
        user =  authenticate(email=email, password=password)
        if user is not None:
            login(request,user)
            message = "Ok"
        else:
            message = "Nombre de usuario o contraseña incorrecto"
    return JsonResponse({"message":message})