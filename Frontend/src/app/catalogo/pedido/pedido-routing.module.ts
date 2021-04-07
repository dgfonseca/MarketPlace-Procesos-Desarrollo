import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PedidoCreateComponent} from "./pedido-create/pedido-create.component";
import {PedidoDetailComponent} from "./pedido-detail/pedido-detail.component";
import {PedidoListComponent} from "./pedido-list/pedido-list.component";
import {PedidoUpdateComponent} from "./pedido-update/pedido-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: PedidoCreateComponent
  },
  {
    path: 'detail/:id',
    component: PedidoDetailComponent
  },
  {
    path: 'list',
    component: PedidoListComponent
  },
  {
    path: 'update/:id',
    component: PedidoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule {
}
