from django.db import models
from .cantidad_producto_catalogo import cantidad_producto_catalogo as r_cantidad_producto_catalogo
from .canasta import canasta as r_canasta
from .cantidad_producto_catalogo import cantidad_producto_catalogo as r_cantidad_producto_catalogo

class producto_catalogo(models.Model):
    nombre = models.CharField(max_length=30, null=False, blank=False)
    precio_por_unidad = models.FloatField(null=False, blank=False)
    fotoProducto = models.CharField(max_length=40, null=False, blank=False)
    unidad = models.CharField(max_length=20, null=False, blank=False)
    activado = models.BooleanField(blank=False, null=False)
    canasta = models.ForeignKey(r_canasta, on_delete= models.DO_NOTHING, blank=True, null=True)
    cantidad_producto_catalogo = models.ManyToManyField(r_cantidad_producto_catalogo)


    

    