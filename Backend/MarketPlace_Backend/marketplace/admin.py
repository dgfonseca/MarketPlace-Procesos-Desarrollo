from django.contrib import admin
from .models.user import User
from .models.oferta_productor import OfertaProductor
from .models.productor import Productor
from .models.cantidad_producto import CantidadProducto
from .models.producto import producto
from .models.canasta import canasta
from .models.cantidad_producto_catalogo import cantidad_producto_catalogo
from .models.producto_catalogo import producto_catalogo

# Register your models here.

admin.site.register(User)
admin.site.register(Productor)
admin.site.register(OfertaProductor)
admin.site.register(CantidadProducto)
admin.site.register(producto)
admin.site.register(canasta)
admin.site.register(cantidad_producto_catalogo)
admin.site.register(producto_catalogo)