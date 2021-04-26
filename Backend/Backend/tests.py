from django.test import TestCase, Client
from .models import ProductoCatalogo
import json


class GM_09_Tests(TestCase):
    def test_post_producto_catalogo(self):
        response = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(http_response, 201)
        self.assertEqual(current_data['nombre'], 'Producto 1')

    def test_post_producto_catalogo_nombre_existe(self):
        self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")

        response = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 2000,
                "fotoProducto": "Foto.jpg",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data['message'], 'Producto con ese nombre ya existe')
        self.assertEqual(http_response, 409)

    def test_post_producto_catalogo_campos_faltantes_incorrectos(self):
        response = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 1500,
                "fotoProducto": "Foto.jgp"
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"], "Campos faltantes o incorrectos")
        self.assertEqual(http_response, 203)

        response = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "precioPorUnidad": 2000,
                "fotoProducto": "Foto.jpg",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"],"Tiene que enviar un nombre")
        self.assertEqual(http_response, 409)

        response = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": "Hola",
                "fotoProducto": 1233,
                "unidad": True,
                "activado": "Falso"
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"], "Campos faltantes o incorrectos")
        self.assertEqual(http_response, 203)

    def test_put_producto_catalogo(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test", unidad="Libras", activado=False)
        response = self.client.put('/api/producto-catalogo/'+str(producto.id)+'/', json.dumps(
            {
                "nombre": "Modificado",
                "precioPorUnidad": 2000,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Kg",
                "activado": True
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"], "Modificado")
        self.assertEqual(http_response, 200)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 2000,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Kg",
                "activado": True
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"], "Producto 1")
        self.assertEqual(http_response, 200)


    def test_put_producto_catalogo_nombre_existe(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test", unidad="Libras", activado=False)
        producto2 = ProductoCatalogo.objects.create(nombre="Producto 2", precioPorUnidad=1500, fotoProducto="Foto.test", unidad="Libras", activado=False)

        response = self.client.put('/api/producto-catalogo/'+str(producto.id)+'/', json.dumps(
            {
                "nombre": "Producto 1",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")

        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data['message'], 'Producto con ese nombre ya existe')
        self.assertEqual(http_response, 409)

    def test_put_producto_catalogo_campos_faltantes_incorrectos(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test", unidad="Libras", activado=False)

        response = self.client.put('/api/producto-catalogo/'+str(producto.id)+'/', json.dumps(
            {
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"],"Producto 1")
        self.assertEqual(http_response, 200)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": 2000,
                "fotoProducto": "Foto2",
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["activado"], False)
        self.assertEqual(current_data["unidad"], "Libras")
        self.assertEqual(current_data["precioPorUnidad"], 2000)
        self.assertEqual(current_data["fotoProducto"], "Foto2")
        self.assertEqual(http_response, 200)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": "Error",
                "fotoProducto": 123321,
                "activado": True,
                "unidad": "Kilos"
            }
        ), content_type="application/json")
        producto2 = ProductoCatalogo.objects.get(pk=producto.id)
        http_response = response.status_code
        self.assertEqual(producto2.activado, False)
        self.assertEqual(producto2.unidad, "Libras")
        self.assertEqual(producto2.precioPorUnidad, 2000)
        self.assertEqual(producto2.fotoProducto, "Foto2")
        self.assertEqual(http_response, 406)



