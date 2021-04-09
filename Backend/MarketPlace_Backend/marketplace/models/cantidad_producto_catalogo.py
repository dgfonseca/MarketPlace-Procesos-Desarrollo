from django.db import models

class cantidad_producto_catalogo(models.Model):
    cantidad = models.IntegerField(blank=False, null=False)
    