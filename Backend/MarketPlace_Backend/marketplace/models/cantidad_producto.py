from django.db import models

class cantidad_producto(models.Model):
    cantidad = models.IntegerField(null=False,  blank=False)