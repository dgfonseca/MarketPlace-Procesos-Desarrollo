from rest_framework import viewsets, generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ProductoCatalogo
from .serializers import ProductoCatalogoSerializer
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize

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
@csrf_exempt
    def create(self, request, *args, **kwargs):
        try:
            if 'nombre' in request.data:
                producto = list(ProductoCatalogo.objects.filter(nombre=str(request.data["nombre"])))
                if producto or producto != [] or len(producto) != 0:
                    return Response({"message": "Producto con ese nombre ya existe"}, status=status.HTTP_409_CONFLICT)
                else:
                    if request.method == 'POST':
                        serializer = ProductoCatalogoSerializer(data=request.data)
                        if serializer.is_valid():
                            serializer.save()
                            return Response(serializer.data, status=status.HTTP_201_CREATED)
                        return Response({"message": "Campos faltantes o incorrectos"},
                                        status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
                    return Response({"message": "Tiene que se un metodo POST"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"message": "Tiene que enviar un nombre"}, status=status.HTTP_409_CONFLICT)
        except Exception as e:
            return Response({"message": e}, status=status.HTTP_409_CONFLICT)

    @csrf_exempt
    def update(self, request, *args, **kwargs):
        try:
            if "precioPorUnidad" not in request.data:
                if 'nombre' in request.data:
                    producto = list(ProductoCatalogo.objects.filter(nombre=request.data["nombre"]))
                    if producto or producto != [] or len(producto) != 0:
                        return Response({"message": "Producto con ese nombre ya existe"},
                                        status=status.HTTP_409_CONFLICT)
                    else:
                        return update_producto_catalogo(request, **kwargs)
                else:
                    return update_producto_catalogo(request, **kwargs)
            else:
                try:
                    if request.data["precioPorUnidad"] <= 0:
                        return Response({"message": "El precio no puede ser menor o igual a 0"},
                                        status=status.HTTP_406_NOT_ACCEPTABLE)
                    else:
                        if 'nombre' in request.data:
                            producto = list(ProductoCatalogo.objects.filter(nombre=request.data["nombre"]))
                            if producto or producto != [] or len(producto) != 0:
                                return Response({"message": "Producto con ese nombre ya existe"},
                                                status=status.HTTP_409_CONFLICT)
                            else:
                                return update_producto_catalogo(request, **kwargs)
                        else:
                            return update_producto_catalogo(request, **kwargs)
                except Exception:
                    return Response({"message":"El precio debe ser un numero"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        except Exception as e:
            return Response({"message": e}, status=status.HTTP_409_CONFLICT)

            
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


def update_producto_catalogo(request, **kwargs):
    if request.method == 'PUT':
        producto = ProductoCatalogo.objects.get(pk=kwargs.get('pk'))
        serializer = ProductoCatalogoSerializer(producto, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            ProductoCatalogo.objects.get(pk=kwargs.get('pk'))
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
    return Response({"message": "Tiene que se un metodo POST"}, status=status.HTTP_400_BAD_REQUEST)
