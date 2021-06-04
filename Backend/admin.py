from . models import (Usuario,Productor,PedidoUsuario,PedidoProductor,ProductoCatalogo,Canasta,CantidadProductoCatalogo,Producto,OfertaProductor, CantidadProducto, ProductorPostulante,)
from django.contrib import admin

admin.site.register(Usuario)
admin.site.register(ProductorPostulante)
admin.site.register(Producto)
admin.site.register(Productor)
admin.site.register(PedidoProductor)
admin.site.register(PedidoUsuario)
admin.site.register(ProductoCatalogo)
admin.site.register(Canasta)
admin.site.register(CantidadProducto)
admin.site.register(CantidadProductoCatalogo)
admin.site.register(OfertaProductor)
