from django.db import models

class canasta(models.Model):
    nombre = models.CharField(null=False, blank=False)
