from django.db import models
from marketplace.models.productor import Productor


class OfertaProductor(models.Model):
    fechaInicio = models.DateTimeField(blank=False, null=False)
    fechaFin = models.DateTimeField(blank=False,null=False)
    productor = models.ForeignKey(Productor, null=False, blank=False, on_delete=models.PROTECT)