from django.http import response
from django.test import TestCase, Client
from .models import ProductoCatalogo
from .models import ProductorPostulante
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
        current_data = json.loads(response.content)
        self.assertEqual(http_response, 200)
        self.assertEqual(current_data["activado"], False)

    def test_habilitar_canasta(self):
        canasta = Canasta.objects.create(nombre="Canasta 1", activado=False)
        response = self.client.put('/api/canasta/' + str(canasta.id) + '/', json.dumps({
            "activado": True
        }
        ), content_type="application/json")
        http_response = response.status_code
        current_data = json.loads(response.content)
        self.assertEqual(http_response, 200)
        self.assertEqual(current_data["activado"], True)

        response = self.client.put('/api/canasta/' + str(canasta.id) + '/', json.dumps({
            "activado": "Holiwi"
        }
        ), content_type="application/json")
        http_response = response.status_code
        current_data = json.loads(response.content)
        self.assertEqual(http_response,400)
        self.assertEqual(current_data["message"],"No se pudo actualizar el estado de la canasta, por favor verifique los valores de la peticion")


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
        self.assertEqual(http_response,200)


class GM_57_Tests(TestCase):

    def test_visualizar_productores_postulantes(self):
        productores = []
        for i in range(5):
            productor  = ProductorPostulante.objects.create(
                nombreFinca="finca" + str(i),
                nombre="productor" + str(i),
                correo = "correo" + str(i) + "@test.com",
                celular = "300246373" + str(i),
                telefono = "300246373" + str(i),
                productos = "papa, yuca, huevos, zanahoria",
                cultivos = "cultivo papa, yuca, zanahoria",
                procesos = "procesos",
                vereda = "vereda" + str(i),
                municipio = "municipio" + str(i)
            )
            productores.append(productor)
        response = self.client.get('/api/productor-postulante/')
        data = json.loads(response.content)
        self.assertEqual(len(data), len(productores))







class GM_56_Tests(TestCase):

    def test_postularse(self):
        response = self.client.post('/api/productor-postulante/', json.dumps(
            {
                "nombreFinca": "shdfjahsfkj",
                "nombre": "David",
                "correo": "dg.fonseca@uniandes.edu.co",
                "celular": "123123",
                "telefono": "123123",
                "productos": "adhfkjadhfjka",
                "cultivos": "Papa  mazorca morcilla",
                "procesos": "adasdasdasd",
                "vereda": "jshfjashfksf",
                "municipio": "jlksdjfklsjfkls",
                "aceptado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(current_data["nombre"], "David")
        self.assertEqual(http_response, 200)

    def test_postularse_campos_faltantes(self):
        response = self.client.post('/api/productor-postulante/', json.dumps(
            {
                "nombreFinca": "La paila",
                "correo": "dg.fonseca@uniandes.edu.co",
                "celular": "123123",
                "productos": "DXMXFrMxZhgUUWLr2NkKENYyQ2HetvZrB7bgatWTuvXr3u98hV8bMnRpZm8B23JvnZVzpenWU8HWSnHExmd3W6zzQiQtSP3NBD5nTrHEi7vLMSJSztAcJYYZmEjq8RdNeZJ8fpr6ZrtYL6aaMpuN3VHAiQSnTqAyPgkESRW44XF6tLhvEjrLf94TH2Gj2G4cngi5L9v5hFXv3dRF465rxexUEAwC4kWmMkvSyGRzCEv8NWrbMEkeLyz3ES5XTvJ5j9q2jrt25MiNXh76PCSv6e294tYTF4QFRKc4MVqVE8AGWZaZhN8Q28q6f9mYN4QqPyLWHvyWDbhKvyc6KVBwSWtwqLq52uW2xXQRD4R7RMpKSF6aXA5ym6N6YCdLBc4guBYHSKWFEB6cU2qfYN7f2SXEHc6EmGWiyMr4WZudwnVbJxkuDG5fXfLTQYDuXryna3NkmMfPSdT8ZYPnpLhZxN4K44B3bkULmJduCqtYnj9UwG89bwy8jXFUyJBt4DkKdhrV33MqHdFVVu4pTmJZBLB9p26MmWe9uyVjYtikmTPy9KhyFTnmMyUUiSNqpVmbNipPutKSG6EtdwuLUTJmKa54qAWvTr7HaeYByF2uD5ncVNDnmykRiMXFwfjGABGHMfTWNB8kuiqr5FhYEFMudvBNkjktw7QFty5WeHGw3VVNq7yr9wu3zrZECRexiT4dnGJraDWe77HaugtBEYcG5rNPnTxpiAuxeuEVTn7iN6MgxpuvBJ8g2VW6yxRKU57BAU22J4ABbMPgtNyu5BHTaTS3rAnuqSv2FyA2PnT9wKzm72itPGfS4xMVYjTgm7di4K5bG4egEninBFcuSiGabSmKbxjJxDL9pWmnLmNqa9WryFhcVeqCfraUFwZEzbTJSzbPiLVWxw8NKFXDJDaxfhWZHVTNuyrAH6cDf8KqZ8nDN5enZgVugre9XgajDx4iJZQJ7EqJ5euDJ43r5Lq5NvGapmhDuJt2X6XRrtuAasdasjsajfsjfslkjfklsdjfkljasfeionsnfsahfeioankdsfnjoenaskldnfeafnioasdbnfbsfbeibsdbnfeobsondfnskjdnfjhawuhnfdkslhfuewahidhfuahsinjfhsuhfhjfalksdjlkfnafoiwheaiodnfhidjfieikdksowodfhapwpajdfhiuhauhdfn",
                "procesos": "adasdasdasd",
                "vereda": "jshfjashfksf",
                "municipio": "jlksdjfklsjfkls",
                "aceptado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(http_response,400)

    def test_postularse_campos_invalidos(self):
        response = self.client.post('/api/productor-postulante/',json.dumps(
            {
                "nombreFinca":False,
                "nombre":1234,
                "correo":"dg.fonseca@uniandes.edu.co",
                "celular":"123123",
                "telefono":"123123",
                "productos":"DXMXFrMxZhgUUWLr2NkKENYyQ2HetvZrB7bgatWTuvXr3u98hV8bMnRpZm8B23JvnZVzpenWU8HWSnHExmd3W6zzQiQtSP3NBD5nTrHEi7vLMSJSztAcJYYZmEjq8RdNeZJ8fpr6ZrtYL6aaMpuN3VHAiQSnTqAyPgkESRW44XF6tLhvEjrLf94TH2Gj2G4cngi5L9v5hFXv3dRF465rxexUEAwC4kWmMkvSyGRzCEv8NWrbMEkeLyz3ES5XTvJ5j9q2jrt25MiNXh76PCSv6e294tYTF4QFRKc4MVqVE8AGWZaZhN8Q28q6f9mYN4QqPyLWHvyWDbhKvyc6KVBwSWtwqLq52uW2xXQRD4R7RMpKSF6aXA5ym6N6YCdLBc4guBYHSKWFEB6cU2qfYN7f2SXEHc6EmGWiyMr4WZudwnVbJxkuDG5fXfLTQYDuXryna3NkmMfPSdT8ZYPnpLhZxN4K44B3bkULmJduCqtYnj9UwG89bwy8jXFUyJBt4DkKdhrV33MqHdFVVu4pTmJZBLB9p26MmWe9uyVjYtikmTPy9KhyFTnmMyUUiSNqpVmbNipPutKSG6EtdwuLUTJmKa54qAWvTr7HaeYByF2uD5ncVNDnmykRiMXFwfjGABGHMfTWNB8kuiqr5FhYEFMudvBNkjktw7QFty5WeHGw3VVNq7yr9wu3zrZECRexiT4dnGJraDWe77HaugtBEYcG5rNPnTxpiAuxeuEVTn7iN6MgxpuvBJ8g2VW6yxRKU57BAU22J4ABbMPgtNyu5BHTaTS3rAnuqSv2FyA2PnT9wKzm72itPGfS4xMVYjTgm7di4K5bG4egEninBFcuSiGabSmKbxjJxDL9pWmnLmNqa9WryFhcVeqCfraUFwZEzbTJSzbPiLVWxw8NKFXDJDaxfhWZHVTNuyrAH6cDf8KqZ8nDN5enZgVugre9XgajDx4iJZQJ7EqJ5euDJ43r5Lq5NvGapmhDuJt2X6XRrtuAasdasjsajfsjfslkjfklsdjfkljasfeionsnfsahfeioankdsfnjoenaskldnfeafnioasdbnfbsfbeibsdbnfeobsondfnskjdnfjhawuhnfdkslhfuewahidhfuahsinjfhsuhfhjfalksdjlkfnafoiwheaiodnfhidjfieikdksowodfhapwpajdfhiuhauhdfn",
                "cultivos":"Papa  mazorca morcilla",
                "procesos":"adasdasdasd",
                "vereda":"jshfjashfksf",
                "municipio":"jlksdjfklsjfkls",
                "aceptado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(http_response,400)

        response = self.client.post('/api/productor-postulante/', json.dumps(
            {
                "nombreFinca": "",
                "nombre": "",
                "correo": "dg.fonseca@uniandes.edu.co",
                "celular": "123123",
                "telefono": "123123",
                "productos": "DXMXFrMxZhgUUWLr2NkKENYyQ2HetvZrB7bgatWTuvXr3u98hV8bMnRpZm8B23JvnZVzpenWU8HWSnHExmd3W6zzQiQtSP3NBD5nTrHEi7vLMSJSztAcJYYZmEjq8RdNeZJ8fpr6ZrtYL6aaMpuN3VHAiQSnTqAyPgkESRW44XF6tLhvEjrLf94TH2Gj2G4cngi5L9v5hFXv3dRF465rxexUEAwC4kWmMkvSyGRzCEv8NWrbMEkeLyz3ES5XTvJ5j9q2jrt25MiNXh76PCSv6e294tYTF4QFRKc4MVqVE8AGWZaZhN8Q28q6f9mYN4QqPyLWHvyWDbhKvyc6KVBwSWtwqLq52uW2xXQRD4R7RMpKSF6aXA5ym6N6YCdLBc4guBYHSKWFEB6cU2qfYN7f2SXEHc6EmGWiyMr4WZudwnVbJxkuDG5fXfLTQYDuXryna3NkmMfPSdT8ZYPnpLhZxN4K44B3bkULmJduCqtYnj9UwG89bwy8jXFUyJBt4DkKdhrV33MqHdFVVu4pTmJZBLB9p26MmWe9uyVjYtikmTPy9KhyFTnmMyUUiSNqpVmbNipPutKSG6EtdwuLUTJmKa54qAWvTr7HaeYByF2uD5ncVNDnmykRiMXFwfjGABGHMfTWNB8kuiqr5FhYEFMudvBNkjktw7QFty5WeHGw3VVNq7yr9wu3zrZECRexiT4dnGJraDWe77HaugtBEYcG5rNPnTxpiAuxeuEVTn7iN6MgxpuvBJ8g2VW6yxRKU57BAU22J4ABbMPgtNyu5BHTaTS3rAnuqSv2FyA2PnT9wKzm72itPGfS4xMVYjTgm7di4K5bG4egEninBFcuSiGabSmKbxjJxDL9pWmnLmNqa9WryFhcVeqCfraUFwZEzbTJSzbPiLVWxw8NKFXDJDaxfhWZHVTNuyrAH6cDf8KqZ8nDN5enZgVugre9XgajDx4iJZQJ7EqJ5euDJ43r5Lq5NvGapmhDuJt2X6XRrtuAasdasjsajfsjfslkjfklsdjfkljasfeionsnfsahfeioankdsfnjoenaskldnfeafnioasdbnfbsfbeibsdbnfeobsondfnskjdnfjhawuhnfdkslhfuewahidhfuahsinjfhsuhfhjfalksdjlkfnafoiwheaiodnfhidjfieikdksowodfhapwpajdfhiuhauhdfn",
                "cultivos": "DXMXFrMxZhgUUWLr2NkKENYyQ2HetvZrB7bgatWTuvXr3u98hV8bMnRpZm8B23JvnZVzpenWU8HWSnHExmd3W6zzQiQtSP3NBD5nTrHEi7vLMSJSztAcJYYZmEjq8RdNeZJ8fpr6ZrtYL6aaMpuN3VHAiQSnTqAyPgkESRW44XF6tLhvEjrLf94TH2Gj2G4cngi5L9v5hFXv3dRF465rxexUEAwC4kWmMkvSyGRzCEv8NWrbMEkeLyz3ES5XTvJ5j9q2jrt25MiNXh76PCSv6e294tYTF4QFRKc4MVqVE8AGWZaZhN8Q28q6f9mYN4QqPyLWHvyWDbhKvyc6KVBwSWtwqLq52uW2xXQRD4R7RMpKSF6aXA5ym6N6YCdLBc4guBYHSKWFEB6cU2qfYN7f2SXEHc6EmGWiyMr4WZudwnVbJxkuDG5fXfLTQYDuXryna3NkmMfPSdT8ZYPnpLhZxN4K44B3bkULmJduCqtYnj9UwG89bwy8jXFUyJBt4DkKdhrV33MqHdFVVu4pTmJZBLB9p26MmWe9uyVjYtikmTPy9KhyFTnmMyUUiSNqpVmbNipPutKSG6EtdwuLUTJmKa54qAWvTr7HaeYByF2uD5ncVNDnmykRiMXFwfjGABGHMfTWNB8kuiqr5FhYEFMudvBNkjktw7QFty5WeHGw3VVNq7yr9wu3zrZECRexiT4dnGJraDWe77HaugtBEYcG5rNPnTxpiAuxeuEVTn7iN6MgxpuvBJ8g2VW6yxRKU57BAU22J4ABbMPgtNyu5BHTaTS3rAnuqSv2FyA2PnT9wKzm72itPGfS4xMVYjTgm7di4K5bG4egEninBFcuSiGabSmKbxjJxDL9pWmnLmNqa9WryFhcVeqCfraUFwZEzbTJSzbPiLVWxw8NKFXDJDaxfhWZHVTNuyrAH6cDf8KqZ8nDN5enZgVugre9XgajDx4iJZQJ7EqJ5euDJ43r5Lq5NvGapmhDuJt2X6XRrtuAasdasjsajfsjfslkjfklsdjfkljasfeionsnfsahfeioankdsfnjoenaskldnfeafnioasdbnfbsfbeibsdbnfeobsondfnskjdnfjhawuhnfdkslhfuewahidhfuahsinjfhsuhfhjfalksdjlkfnafoiwheaiodnfhidjfieikdksowodfhapwpajdfhiuhauhdfn",
                "procesos": "adasdasdasd",
                "vereda": "jshfjashfksf",
                "municipio": "jlksdjfklsjfkls",
                "aceptado": False
            }
        ), content_type="application/json")
        current_data = json.loads(response.content)
        http_response = response.status_code
        self.assertEqual(http_response, 400)

