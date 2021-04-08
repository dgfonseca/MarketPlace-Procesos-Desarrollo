import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductorRoutingModule} from './productor-routing.module';
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {ProductorCreateComponent} from './productor-create/productor-create.component';
import {ProductorDetailComponent} from './productor-detail/productor-detail.component';
import {ProductorListComponent} from './productor-list/productor-list.component';
import {ProductorUpdateComponent} from './productor-update/productor-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { PedidoProductorListComponent } from './pedido-productor-list/pedido-productor-list.component';

@NgModule({
  declarations: [
    OfertaListComponent,
    ProductorCreateComponent,
    ProductorDetailComponent,
    ProductorListComponent,
    ProductorUpdateComponent,
    PedidoProductorListComponent
  ],
  imports: [
    CommonModule,
    ProductorRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductorModule {
}
