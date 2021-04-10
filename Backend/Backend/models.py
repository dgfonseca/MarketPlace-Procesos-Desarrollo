from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=255, blank=False, null=False)
    correo = models.EmailField(max_length=255, blank=False, unique=True)
    contrasena = models.CharField(max_length=255, blank=False, unique=True)
    esAdmin = models.BooleanField(default=False)


class Productor(models.Model):
    direccion = models.CharField(max_length=255, blank=False, null=False)
    fotoProveedor = models.CharField(max_length=255, blank=False, null=False)
    activado = models.BooleanField(default=False)
    numeroTelefono = models.CharField(max_length=255, blank=False, null=False)
    descripcion = models.CharField(max_length=255, blank=False, null=False)
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, blank=True, null=True)


class PedidoUsuario(models.Model):
    costoTotal = models.FloatField(blank=False, null=False)
    fechaEntrega = models.DateTimeField(blank=False, null=False)
    direccionEntrega = models.CharField(max_length=255, blank=False, null=False)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, blank=True, null=True)


class ProductoCatalogo(models.Model):
    nombre = models.CharField(max_length=255, blank=False, null=False)
    precioPorUnidad = models.FloatField(blank=False, null=False)
    fotoProducto = models.CharField(max_length=255, blank=False, null=False)
    unidad = models.CharField(max_length=255, blank=False, null=False)
    activado = models.BooleanField(default=False)


class Canasta(models.Model):
    nombre = models.CharField(max_length=255, blank=False, null=False)


class CantidadProductoCatalogo(models.Model):
    cantidad = models.IntegerField(blank=False, null=False)
    pedidoUsuario = models.ForeignKey(PedidoUsuario, on_delete=models.CASCADE, blank=True, null=True)
    productoCatalogo = models.ForeignKey(ProductoCatalogo, on_delete=models.CASCADE, blank=True, null=True)
    canasta = models.ForeignKey(Canasta, on_delete=models.CASCADE, blank=True, null=True)


class Producto(models.Model):
    precioPorUnidad = models.FloatField(blank=False, null=False)
    cantidadDisponible = models.IntegerField(blank=False, null=False)
    productoCatalogo = models.ForeignKey(ProductoCatalogo, on_delete=models.CASCADE, blank=True, null=True)


class OfertaProductor(models.Model):
    fechaInicio = models.DateTimeField(blank=False, null=False)
    fechaFin = models.DateTimeField(blank=False, null=False)
    productor = models.ForeignKey(Productor, on_delete=models.CASCADE, blank=True, null=True)


class PedidoProductor(models.Model):
    costoTotal = models.FloatField(blank=False, null=False)
    ofertaProductor = models.ForeignKey(OfertaProductor, on_delete=models.CASCADE, blank=True, null=True)
    pedidoUsuario = models.ForeignKey(PedidoUsuario, on_delete=models.DO_NOTHING, blank=True, null=True)


class CantidadProducto(models.Model):
    cantidad = models.IntegerField(blank=False, null=False)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, blank=True, null=True)
    ofertaProductor = models.ForeignKey(OfertaProductor, on_delete=models.CASCADE, blank=True, null=True)
    pedidoProductor = models.ForeignKey(PedidoProductor, on_delete=models.CASCADE, blank=True, null=True)
