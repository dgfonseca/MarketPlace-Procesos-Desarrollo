from rest_framework import serializers

from . import models


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = '__all__'

class ProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Productor
        fields = '__all__'


class PedidoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PedidoUsuario
        fields = '__all__'


class ProductoCatalogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductoCatalogo
        fields = '__all__'

class CanastaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Canasta
        fields = '__all__'

class CantidadProductoCatalogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CantidadProductoCatalogo
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Producto
        fields = '__all__'

class OfertaProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OfertaProductor
        fields = '__all__'

class PedidoProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PedidoProductor
        fields = '__all__'

class CantidadProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CantidadProducto
        fields = '__all__'
