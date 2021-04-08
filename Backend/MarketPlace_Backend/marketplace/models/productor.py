from django.db import models


class Productor(models.Model):
    nombre = models.CharField(max_length=150, null=False, blank=False)
    direccion = models.CharField(max_length=200, null=False, blank=False)
    telefono = models.CharField(max_length=20, null=False, blank=False)
    activado = models.BooleanField(default=False, blank=False, null=False)
    foto = models.ImageField(upload_to='static', null=True, blank=True)



