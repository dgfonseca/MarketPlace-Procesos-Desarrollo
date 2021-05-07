import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteCreateComponent} from "./cliente-create/cliente-create.component";
import {ClienteDetailComponent} from "./cliente-detail/cliente-detail.component";
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {ClienteUpdateComponent} from "./cliente-update/cliente-update.component";
import {PedidoClienteListComponent} from "./pedido-cliente-list/pedido-cliente-list.component";

const routes: Routes = [
  {
    path: 'create',
    component: ClienteCreateComponent
  },
  {
    path: 'detail/:id',
    component: ClienteDetailComponent
  },
  {
    path: 'list',
    component: ClienteListComponent
  },
  {
    path: 'update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: ':id/pedido/list',
    component: PedidoClienteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
