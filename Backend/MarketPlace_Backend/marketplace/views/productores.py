from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers
from django.contrib.auth.decorators import login_required
from ..models.productor import Productor
from django.views.decorators.http import require_http_methods


@login_required
@require_http_methods(["GET"])
def productor_list(request):
    if request.user.is_authenticated:
        productores_list = Productor.objects.values('direccion', 'fotoProveedor', 'numeroTelefono', 'descripcion',
                                                    'user__email', 'user__name').all()
        context = list(productores_list)
        return HttpResponse(context, content_type="application/json")
    else:
        return HttpResponse({"message": "No está loggineado"}, content_type="application/json")


@login_required
@require_http_methods(["GET"])
def productor_detail(request, queryparams):
    if request.user.is_authenticated:
        productor = Productor.objects.values('direccion', 'fotoProveedor', 'numeroTelefono', 'descripcion',
                                             'user__email', 'user__name').filter(user__email=queryparams)
        context = list(productor)
        return HttpResponse(context, content_type="application/json")
    else:
        return HttpResponse({"message": "No está loggineado"}, content_type="application/json")
