import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoClienteRoutingModule } from './pedido-cliente-routing.module';
import { PedidoClienteUpdateComponent } from './pedido-cliente-update/pedido-cliente-update.component';
import { PedidoClienteListComponent } from './pedido-cliente-list/pedido-cliente-list.component';
import { PedidoClienteDetailComponent } from './pedido-cliente-detail/pedido-cliente-detail.component';
import { PedidoClienteCreateComponent } from './pedido-cliente-create/pedido-cliente-create.component';


@NgModule({
  declarations: [
    PedidoClienteUpdateComponent,
    PedidoClienteListComponent,
    PedidoClienteDetailComponent,
    PedidoClienteCreateComponent
  ],
  imports: [
    CommonModule,
    PedidoClienteRoutingModule
  ]
})
export class PedidoClienteModule { }
