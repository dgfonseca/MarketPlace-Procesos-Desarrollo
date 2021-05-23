from django.test import TestCase, Client
from .models import ProductoCatalogo
import json


class GM71Tests(TestCase):
    def test_delete_producto_catalogo(self):
        request_post_producto_catalogo = self.client.post('/api/producto-catalogo/', json.dumps(
            {
                "nombre": "taquitos de canasta",
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "kg",
                "activado": False
            }
        ), content_type="application/json")
        id_producto_catalogo = json.loads(request_post_producto_catalogo.content)["id"]
        request_delete = self.client.delete('/api/producto-catalogo/' + str(id_producto_catalogo) + '/')
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
        id_producto_catalogo = json.loads(request_post_producto_catalogo.content)["id"]
        request_post_producto = self.client.post('/api/producto/', json.dumps(
            {
                "precioPorUnidad": "23.3",
                "cantidadDisponible": "20",
                "productoCatalogo": id_producto_catalogo
            }
        ), content_type="application/json")
        request_delete = self.client.delete('/api/producto-catalogo/' + str(id_producto_catalogo) + '/')
        self.assertEqual(request_delete.status_code, 406)


class GM_09_Tests(TestCase):

    def test_put_producto_catalogo_nombre_existe(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test",
                                                   unidad="Libras", activado=False)
        producto2 = ProductoCatalogo.objects.create(nombre="Producto 2", precioPorUnidad=1500, fotoProducto="Foto.test",
                                                    unidad="Libras", activado=False)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "nombre": "Producto 2",
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
        self.assertEqual(current_data["message"], "Tiene que enviar un nombre")
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
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test",
                                                   unidad="Libras", activado=False)
        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
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

    def test_put_precio_producto_catalogo(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test",
                                                   unidad="Libras", activado=False)
        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": -2000,
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"], "El precio no puede ser menor o igual a 0")
        self.assertEqual(http_response, 406)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": 3000,
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"], "Producto 1")
        self.assertEqual(http_response, 200)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": 0,
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"], "El precio no puede ser menor o igual a 0")
        self.assertEqual(http_response, 406)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": "Inyección soy hacker",
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["message"], "El precio debe ser un numero")
        self.assertEqual(http_response, 406)

    def test_put_producto_catalogo_campos_faltantes_incorrectos(self):
        producto = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test",
                                                   unidad="Libras", activado=False)

        response = self.client.put('/api/producto-catalogo/' + str(producto.id) + '/', json.dumps(
            {
                "precioPorUnidad": 1500,
                "fotoProducto": "Fotoasdsad",
                "unidad": "Libras",
                "activado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"], "Producto 1")
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


from .models import Producto, Canasta, CantidadProductoCatalogo


class GM_72_Tests(TestCase):

    def test_inhabilitar_canasta(self):
        canasta = Canasta.objects.create(nombre="Canasta 1", activado=True)
        response = self.client.put('/api/canasta/' + str(canasta.id) + '/', json.dumps({
            "activado": False
        }
        ), content_type="application/json")
        http_response = response.status_code
        current_data = json.loads(response.data)
        self.assertEqual(http_response, 200)
        self.assertEqual(current_data["activado"], False)

    def test_habilitar_canasta(self):
        canasta = Canasta.objects.create(nombre="Canasta 1", activado=False)
        response = self.client.put('/api/canasta/' + str(canasta.id) + '/', json.dumps({
            "activado": True
        }
        ), content_type="application/json")
        http_response = response.status_code
        current_data = json.loads(response.data)
        self.assertEqual(http_response, 200)
        self.assertEqual(current_data["activado"], True)

    # def test_agregar_canasta(self):
    #     producto1 = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500, fotoProducto="Foto.test",
    #                                                 unidad="Libras", activado=True)
    #     producto2 = ProductoCatalogo.objects.create(nombre="Producto 2", precioPorUnidad=1500, fotoProducto="Foto.test",
    #                                                 unidad="Libras", activado=True)
    #     response = self.client.post('/api/canasta/', json.dumps({
    #         "nombre": "Canasta 1",
    #         "activado": True,
    #         "productos": [{
    #             "producto": producto1.id,
    #             "cantidad": 35
    #         }, {
    #             "producto": producto2.id,
    #             "cantidad": 35
    #         }],
    #     }), content_type="application/json")
    #     http_response = response.status_code
    #     current_data = json.loads(response.data)
    #     self.assertEqual(http_response, 200)
    #     self.assertEqual(current_data["nombre"], "Canasta 1")
    #     self.assertEqual(current_data["producto"].length, 2)


class GM_10_Tests(TestCase):

    def test_estadisticas_producto(self):
        producto_catalogo = ProductoCatalogo.objects.create(nombre="Producto 1", precioPorUnidad=1500,
                                                            fotoProducto="Foto.test", unidad="Libras", activado=False)
        response1 = self.client.post('/api/producto/', json.dumps(
            {
                "precioPorUnidad": 1500,
                "cantidadDisponible": 123321,
                "productoCatalogo": producto_catalogo.id
            }
        ), content_type="application/json")
        response = self.client.get('/api/producto/' + str(producto_catalogo.id) + '/')
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["max"], 1500)
        self.assertEqual(current_data["min"], 1500)
        self.assertEqual(current_data["avg"], 1500)
        self.assertEqual(http_response, 200)
