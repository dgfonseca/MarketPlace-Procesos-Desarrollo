import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PedidoProductorCreateComponent} from "./pedido-productor-create/pedido-productor-create.component";
import {PedidoProductorDetailComponent} from "./pedido-productor-detail/pedido-productor-detail.component";
import {PedidoProductorListComponent} from "./pedido-productor-list/pedido-productor-list.component";
import {PedidoProductorUpdateComponent} from "./pedido-productor-update/pedido-productor-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: PedidoProductorCreateComponent
  },
  {
    path: 'detail/:id',
    component: PedidoProductorDetailComponent
  },
  {
    path: 'list',
    component: PedidoProductorListComponent
  },
  {
    path: 'update/:id',
    component: PedidoProductorUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoProductorRoutingModule { }
