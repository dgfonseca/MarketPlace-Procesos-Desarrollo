import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PedidoClienteCreateComponent} from "./pedido-cliente-create/pedido-cliente-create.component";
import {PedidoClienteDetailComponent} from "./pedido-cliente-detail/pedido-cliente-detail.component";
import {PedidoClienteListComponent} from "./pedido-cliente-list/pedido-cliente-list.component";
import {PedidoClienteUpdateComponent} from "./pedido-cliente-update/pedido-cliente-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: PedidoClienteCreateComponent
  },
  {
    path: 'detail/:id',
    component: PedidoClienteDetailComponent
  },
  {
    path: 'list',
    component: PedidoClienteListComponent
  },
  {
    path: 'update/:id',
    component: PedidoClienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoClienteRoutingModule { }
