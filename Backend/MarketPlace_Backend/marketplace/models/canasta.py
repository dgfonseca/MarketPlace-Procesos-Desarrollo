from django.db import models

class canasta(models.Model):
    nombre = models.CharField(max_length=200,null=False, blank=False)
