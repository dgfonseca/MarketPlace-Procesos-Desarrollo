from django.test import TestCase, Client
from .models import ProductoCatalogo
import json


class GM_09_Tests(TestCase):
    def test_post_producto_catalogo(self):
        response = self.client.post('/api/postProductoCatalogo', json.dumps(
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


    def test_put_producto_catalogo(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test", unidad="Libras", activado=False)
        response = self.client.put('/api/putProducto/'+str(producto.id), json.dumps(
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

