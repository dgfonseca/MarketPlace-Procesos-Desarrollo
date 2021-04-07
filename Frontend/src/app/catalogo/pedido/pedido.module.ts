import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoCreateComponent } from './pedido-create/pedido-create.component';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { PedidoUpdateComponent } from './pedido-update/pedido-update.component';


@NgModule({
  declarations: [
    PedidoListComponent,
    PedidoCreateComponent,
    PedidoDetailComponent,
    PedidoUpdateComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
