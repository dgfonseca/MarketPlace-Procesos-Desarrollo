from django.db import models
from .user import User


class Productor(models.Model):
    direccion = models.CharField(max_length=200, null=False, blank=False)
    fotoProveedor = models.CharField(max_length=500, blank=False, null=False)
    numeroTelefono = models.CharField(max_length=20, null=False, blank=False)
    descripcion = models.CharField(max_length=200, null=False, blank=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)



