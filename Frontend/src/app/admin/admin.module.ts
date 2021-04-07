import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {PedidoListComponent} from "./pedido-list/pedido-list.component";
import {ProductoCatalogoListComponent} from "./producto-catalogo-list/producto-catalogo-list.component";
import {ProductoListComponent} from "./producto-list/producto-list.component";
import {ProductorListComponent} from "./productor-list/productor-list.component";
import { HomeComponent } from './home/home.component';
import { CanastaListComponent } from './canasta-list/canasta-list.component';

@NgModule({
  declarations: [
    ClienteListComponent,
    OfertaListComponent,
    PedidoListComponent,
    ProductoCatalogoListComponent,
    ProductoListComponent,
    ProductorListComponent,
    HomeComponent,
    CanastaListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ]
})
export class AdminModule {
}
