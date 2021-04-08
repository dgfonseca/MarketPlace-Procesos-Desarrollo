import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {ProductoCatalogoListComponent} from "./producto-catalogo-list/producto-catalogo-list.component";
import {ProductoListComponent} from "./producto-list/producto-list.component";
import {ProductorListComponent} from "./productor-list/productor-list.component";
import {CanastaListComponent} from "./canasta-list/canasta-list.component";
import {PedidoProductorListComponent} from "./pedido-productor-list/pedido-productor-list.component";
import {PedidoClienteListComponent} from "./pedido-cliente-list/pedido-cliente-list.component";

const routes: Routes = [
  {
    path: 'canasta/list',
    component: CanastaListComponent
  },
  {
    path: 'cliente/list',
    component: ClienteListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'oferta/list',
    component: OfertaListComponent
  },
  {
    path: 'pedido-cliente/list',
    component: PedidoClienteListComponent
  },
  {
    path: 'pedido-productor/list',
    component: PedidoProductorListComponent
  },
  {
    path: 'producto-catalogo/list',
    component: ProductoCatalogoListComponent
  },
  {
    path: 'producto/list',
    component: ProductoListComponent
  },
  {
    path: 'productor/list',
    component: ProductorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
