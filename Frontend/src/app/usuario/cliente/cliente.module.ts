import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {PedidoListComponent} from "./pedido-list/pedido-list.component";
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteUpdateComponent} from './cliente-update/cliente-update.component';

@NgModule({
  declarations: [
    PedidoListComponent,
    ClienteCreateComponent,
    ClienteDetailComponent,
    ClienteListComponent,
    ClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule {
}
