from rest_framework import routers
from . import viewsets

router = routers.DefaultRouter()
router.register('cliente', viewsets.UsuarioViewset)
router.register('productor', viewsets.ProductorViewset)
router.register('pedido-cliente', viewsets.PedidoUsuarioViewset)
router.register('producto-catalogo', viewsets.ProductoCatalogoViewset)
router.register('canasta', viewsets.CanastaViewset)
router.register('cantidad-producto-catalogo', viewsets.CantidadProductoCatalogoViewset)
router.register('producto', viewsets.ProductoViewset)
router.register('oferta', viewsets.OfertaProductorViewset)
router.register('pedido-productor', viewsets.PedidoProductorViewset)
router.register('cantidad-producto', viewsets.CantidadProductoViewset)
