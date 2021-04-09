from django.urls import path
from .views.login import login_view
from .views.productores import productor_list, productor_detail
from .views.ofertas_productores import ofertas_list, oferta, ofertar_productos

urlpatterns = [
    path(r'login/', login_view),
    path(r'productores/', productor_list),
    path(r'productor/<str:queryparams>', productor_detail),
    path(r'ofertas/', ofertas_list ),
    path(r'ofertas/<int:queryparams>', oferta),
    path(r'ofertar/', ofertar_productos)
]
