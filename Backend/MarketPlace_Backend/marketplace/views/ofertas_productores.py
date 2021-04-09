from ..models.oferta_productor import OfertaProductor
from ..models.cantidad_producto import CantidadProducto
from ..models.productor import Productor
from ..models.producto import producto
from ..models.producto_catalogo import producto_catalogo
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET"])
@csrf_exempt
def ofertas_list(request):
    # if request.user.is_authenticated:
    ofertas = OfertaProductor.objects.values('id', 'fechaInicio', 'fechaFin', 'productor__user__name').all()
    context = list(ofertas)
    return HttpResponse(json.dumps(context, default=str), content_type='application/json')
    # else:
    # return HttpResponse({"message":"No está loggeado"}, content_type='application/json')


@require_http_methods(["GET"])
@csrf_exempt
def oferta(request, queryparams):
    # if request.user.is_authenticated:
    oferta = OfertaProductor.objects.values('id', 'fechaInicio', 'fechaFin', 'productor__user__name',
                                            'productor__user__email').get(id=queryparams)
    oferta_dict = oferta
    productos = CantidadProducto.objects.values('oferta_productor__id', 'oferta_productor__fechaInicio',
                                                'oferta_productor__fechaFin', 'cantidad',
                                                'producto__producto_catalogo__nombre', 'producto__precio_por_unidad',
                                                'producto__producto_catalogo__unidad',
                                                'producto__producto_catalogo__fotoProducto').filter(
        oferta_productor=oferta_dict['id'])
    return HttpResponse(json.dumps(list(productos), default=str), content_type="application/json")
    # else:
    # return HttpResponse({"message":"No está loggeado"}, content_type="application/json")

@csrf_exempt
@require_http_methods(["POST"])
def ofertar_productos(request):
    if request.method == "POST":
        oferta = json.loads(request.body)
        cantidad_producto = oferta['cantidadProducto']
        if Productor.objects.filter(user__user_id=oferta['productor']).exists():
            db = OfertaProductor(fechaInicio=oferta['fechaInicio'], fechaFin=oferta['fechaFin'], productor=Productor.objects.get(user__user_id=oferta['productor']))
            db.save()
            for cantidad in cantidad_producto:
                if producto_catalogo.objects.filter(id=cantidad['producto']['productoCatalogo']).exists():
                    db2 = producto(precio_por_unidad=cantidad['producto']['precio_por_unidad'], producto_catalogo=producto_catalogo.objects.get(id=cantidad['producto']['productoCatalogo']), cantidad_disponible=cantidad['producto']['cantidadDisponible'])
                    db2.save()
                    db3 = CantidadProducto(cantidad=cantidad['cantidad'], oferta_productor=db, producto=db2)
                    db3.save()
            return HttpResponse("Exitoso", content_type="application/json")
    else:
        return HttpResponse("Falló debido a que no es un post", content_type="application/json")







