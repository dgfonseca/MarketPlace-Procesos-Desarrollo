from django.db.models import Max, Min, Avg
from rest_framework import viewsets, generics
from rest_framework import status

from rest_framework.response import Response

from django.views.decorators.csrf import csrf_exempt

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
    @csrf_exempt
    def create(self, request, *args, **kwargs):
        try:
            productoCatalogo = models.ProductoCatalogo.objects.get(id=request.data["productoCatalogo"])
            producto = models.Producto.objects.create(precioPorUnidad=request.data["precioPorUnidad"],
                                                      cantidadDisponible=request.data["cantidadDisponible"],
                                                      productoCatalogo=productoCatalogo)
            return Response(self.get_serializer(producto).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": "Error al crear el producto"}, status=status.HTTP_400_BAD_REQUEST)
 
    @csrf_exempt
    def retrieve(self, request, *args, **kwargs):
        try:
            productos = list(models.Producto.objects.filter(productoCatalogo=kwargs.get('pk')))
            if len(productos) != 0 and productos is not None and productos != []:
                max_productos = \
                    models.Producto.objects.filter(productoCatalogo=kwargs.get('pk')).aggregate(Max('precioPorUnidad'))[
                        'precioPorUnidad__max']
                average_productos = \
                    models.Producto.objects.filter(productoCatalogo=kwargs.get('pk')).aggregate(Avg('precioPorUnidad'))[
                        'precioPorUnidad__avg']
                min_productos = \
                    models.Producto.objects.filter(productoCatalogo=kwargs.get('pk')).aggregate(Min('precioPorUnidad'))[
                        'precioPorUnidad__min']
                return Response({'max': max_productos,
                                 'min': min_productos,
                                 'avg': average_productos}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "No hay estadisticas de este producto"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": "Error del servidor"}, status=status.HTTP_400_BAD_REQUEST)
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
