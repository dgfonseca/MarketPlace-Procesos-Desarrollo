import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductorCreateComponent} from "./productor-create/productor-create.component";
import {ProductorDetailComponent} from "./productor-detail/productor-detail.component";
import {ProductorListComponent} from "./productor-list/productor-list.component";
import {ProductorUpdateComponent} from "./productor-update/productor-update.component";
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {PedidoProductorListComponent} from "./pedido-productor-list/pedido-productor-list.component";

const routes: Routes = [
  {
    path: 'create',
    component: ProductorCreateComponent
  },
  {
    path: 'detail/:id',
    component: ProductorDetailComponent
  },
  {
    path: 'list',
    component: ProductorListComponent
  },
  {
    path: 'update/:id',
    component: ProductorUpdateComponent
  },
  {
    path: ':id/oferta/list',
    component: OfertaListComponent
  },
  {
    path: ':id/pedido/list',
    component: PedidoProductorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductorRoutingModule {
}
