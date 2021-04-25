from rest_framework import viewsets, generics

from . import models
from . import serializers


class UsuarioViewset(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = serializers.UsuarioSerializer


class ProductorViewset(viewsets.ModelViewSet):
    queryset = models.Productor.objects.all()
    serializer_class = serializers.ProductorSerializer


class PedidoUsuarioViewset(viewsets.ModelViewSet):
    queryset = models.PedidoUsuario.objects.all()
    serializer_class = serializers.PedidoUsuarioSerializer


class ProductoCatalogoViewset(viewsets.ModelViewSet):
    queryset = models.ProductoCatalogo.objects.all()
    serializer_class = serializers.ProductoCatalogoSerializer


class CanastaViewset(viewsets.ModelViewSet):
    queryset = models.Canasta.objects.all()
    serializer_class = serializers.CanastaSerializer


class CantidadProductoCatalogoViewset(viewsets.ModelViewSet):
    queryset = models.CantidadProductoCatalogo.objects.all()
    serializer_class = serializers.CantidadProductoCatalogoSerializer


class ProductoViewset(viewsets.ModelViewSet):
    queryset = models.Producto.objects.all()
    serializer_class = serializers.ProductoSerializer


class OfertaProductorViewset(viewsets.ModelViewSet):
    queryset = models.OfertaProductor.objects.all()
    serializer_class = serializers.OfertaProductorSerializer


class PedidoProductorViewset(viewsets.ModelViewSet):
    queryset = models.PedidoProductor.objects.all()
    serializer_class = serializers.PedidoProductorSerializer


class CantidadProductoViewset(viewsets.ModelViewSet):
    queryset = models.CantidadProducto.objects.all()
    serializer_class = serializers.CantidadProductoSerializer


class OfertaDeProductorViewset(generics.ListAPIView):
    serializer_class = serializers.OfertaProductorSerializer

    def get_queryset(self):
        queryset = models.OfertaProductor.objects.all()
        id = self.kwargs['id']
        if id is not None:
            queryset = queryset.filter(productor=id)
        return queryset
