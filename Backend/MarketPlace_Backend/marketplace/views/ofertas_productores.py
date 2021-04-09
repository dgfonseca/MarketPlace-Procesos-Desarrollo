from ..models.oferta_productor import OfertaProductor
from ..models.cantidad_producto import CantidadProducto
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods


def ofertas_list(request):
    #if request.user.is_authenticated:
    ofertas = OfertaProductor.objects.values('id','fechaInicio', 'fechaFin', 'productor__user__name').all()
    context = list(ofertas)
    return HttpResponse(json.dumps(context,default=str), content_type='application/json')
    #else:
        #return HttpResponse({"message":"No está loggeado"}, content_type='application/json')


def oferta(request, queryparams):
    #if request.user.is_authenticated:
    oferta = OfertaProductor.objects.values('id','fechaInicio','fechaFin','productor__user__name', 'productor__user__email').get(id=queryparams)
    oferta_dict = oferta
    productos = CantidadProducto.objects.values('oferta_productor__id','oferta_productor__fechaInicio', 'oferta_productor__fechaFin','cantidad', 'producto__producto_catalogo__nombre', 'producto__precio_por_unidad', 'producto__producto_catalogo__unidad', 'producto__producto_catalogo__fotoProducto').filter(oferta_productor=oferta_dict['id'])
    return HttpResponse(json.dumps(list(productos),default=str), content_type="application/json")
    #else:
       # return HttpResponse({"message":"No está loggeado"}, content_type="application/json")