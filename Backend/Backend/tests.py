from django.test import TestCase, Client
from .models import ProductoCatalogo
import json
from .models import Producto


class GM_10_Tests(TestCase):

    def test_estadisticas_producto(self):
        producto_catalogo = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500,
                                                            fotoProducto="Foto.test", unidad="Libras", activado=False)
        response1=self.client.post('/api/producto/', json.dumps(
            {
                "precioPorUnidad": 1500,
                "cantidadDisponible": 123321,
                "productoCatalogo": producto_catalogo.id
            }
        ), content_type="application/json")
        response = self.client.get('/api/producto/'+str(1)+'/')
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["max"], 1500)
        self.assertEqual(current_data["min"], 1500)
        self.assertEqual(current_data["avg"], 1500)
        self.assertEqual(http_response,200)