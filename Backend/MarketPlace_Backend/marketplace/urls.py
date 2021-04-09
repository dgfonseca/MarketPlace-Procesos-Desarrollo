from django.urls import path
from .views.login import login_view
from .views.productores import productor_list, productor_detail

urlpatterns = [
    path(r'login/', login_view),
    path(r'productores/', productor_list),
    path(r'productor/<str:queryparams>', productor_detail)
]
