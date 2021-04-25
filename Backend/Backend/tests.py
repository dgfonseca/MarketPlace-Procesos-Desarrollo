from django.test import TestCase, Client
from . import models
import json

class GM71Tests(TestCase):
    def test_delete_producto_catalogo(self):
        # test que elimina correctamente dado que no hay ofertas del producto
        request_post_producto_catalogo = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "taquitos de canasta",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "kg",
                "activado": False
            }
        ), content_type="application/json")
        id_producto_catalogo =json.loads(request_post_producto_catalogo.content)["id"]
        request_delete = self.client.delete('/api/producto-catalogo/' + str(id_producto_catalogo)+'/')
        self.assertEqual(request_delete.status_code, 204)

        # test que no elimina correctamente dado que hay ofertas del producto
        request_post_producto_catalogo = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "taquitos de canasta",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "kg",
                "activado": False
            }
        ), content_type="application/json")
        id_producto_catalogo =json.loads(request_post_producto_catalogo.content)["id"]
        request_post_producto = self.client.post('/api/producto/', json.dumps(
            {
                    "precioPorUnidad":"23.3",
                    "cantidadDisponible":"20",
                    "productoCatalogo": id_producto_catalogo
            }
        ), content_type="application/json")
        request_delete = self.client.delete('/api/producto-catalogo/' + str(id_producto_catalogo)+'/')
        self.assertEqual(request_delete.status_code, 406)