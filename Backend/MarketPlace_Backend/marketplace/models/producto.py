from django.db import models
from cantidad_producto import CantidadProducto 
from producto_catalogo import producto_catalogo as r_producto_catalogo

class producto(models.Model):
    precio_por_unidad = models.FloatField(blank=False, null = False)
    cantidad_disponible = models.IntegerField(blank=False, null = False)

    cantidad_producto = models.ManyToManyField(CantidadProducto)
    producto_catalogo = models.ForeignKey(r_producto_catalogo, on_delete=models.CASCADE)

