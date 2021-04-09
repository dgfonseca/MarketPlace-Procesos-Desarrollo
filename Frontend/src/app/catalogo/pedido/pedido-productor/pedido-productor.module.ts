import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoProductorRoutingModule } from './pedido-productor-routing.module';
import { PedidoProductorCreateComponent } from './pedido-productor-create/pedido-productor-create.component';
import { PedidoProductorListComponent } from './pedido-productor-list/pedido-productor-list.component';
import { PedidoProductorDetailComponent } from './pedido-productor-detail/pedido-productor-detail.component';
import { PedidoProductorUpdateComponent } from './pedido-productor-update/pedido-productor-update.component';


@NgModule({
  declarations: [
    PedidoProductorCreateComponent,
    PedidoProductorListComponent,
    PedidoProductorDetailComponent,
    PedidoProductorUpdateComponent
  ],
  imports: [
    CommonModule,
    PedidoProductorRoutingModule
  ]
})
export class PedidoProductorModule { }
