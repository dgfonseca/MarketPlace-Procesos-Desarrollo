import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductoCatalogoRoutingModule} from './producto-catalogo-routing.module';
import {ProductoCatalogoCreateComponent} from './producto-catalogo-create/producto-catalogo-create.component';
import {ProductoCatalogoUpdateComponent} from './producto-catalogo-update/producto-catalogo-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ProductoCatalogoCreateComponent,
    ProductoCatalogoUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductoCatalogoRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductoCatalogoModule {
}
