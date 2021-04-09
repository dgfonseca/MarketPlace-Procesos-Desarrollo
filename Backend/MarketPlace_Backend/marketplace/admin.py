from django.contrib import admin
from .models.user import User
from .models.oferta_productor import OfertaProductor
from .models.productor import Productor
from .models.cantidad_producto import CantidadProducto

# Register your models here.

admin.site.register(User)
admin.site.register(Productor)
admin.site.register(OfertaProductor)
admin.site.register(CantidadProducto)
