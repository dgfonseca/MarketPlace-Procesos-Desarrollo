import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteUpdateComponent} from './cliente-update/cliente-update.component';
import { PedidoClienteListComponent } from './pedido-cliente-list/pedido-cliente-list.component';

@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteDetailComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    PedidoClienteListComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule {
}
