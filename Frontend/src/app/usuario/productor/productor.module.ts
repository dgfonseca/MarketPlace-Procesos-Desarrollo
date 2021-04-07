import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductorRoutingModule} from './productor-routing.module';
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {PedidoListComponent} from "./pedido-list/pedido-list.component";
import {ProductorCreateComponent} from './productor-create/productor-create.component';
import {ProductorDetailComponent} from './productor-detail/productor-detail.component';
import {ProductorListComponent} from './productor-list/productor-list.component';
import {ProductorUpdateComponent} from './productor-update/productor-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    OfertaListComponent,
    PedidoListComponent,
    ProductorCreateComponent,
    ProductorDetailComponent,
    ProductorListComponent,
    ProductorUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductorRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductorModule {
}
