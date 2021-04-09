from django.db import models
from .oferta_productor import OfertaProductor
from .producto import producto
from django.core.validators import MinValueValidator


class CantidadProducto(models.Model):
    cantidad = models.IntegerField(validators=[MinValueValidator(0)])
    oferta_productor = models.ForeignKey(OfertaProductor, on_delete=models.CASCADE, blank=False,null=False)
    producto = models.ForeignKey(producto, on_delete=models.CASCADE, blank=False, null=False)