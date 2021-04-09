import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductoCatalogoRoutingModule} from './producto-catalogo-routing.module';
import {ProductoCatalogoCreateComponent} from './producto-catalogo-create/producto-catalogo-create.component';
import {ProductoCatalogoDetailComponent} from './producto-catalogo-detail/producto-catalogo-detail.component';
import {ProductoCatalogoListComponent} from './producto-catalogo-list/producto-catalogo-list.component';
import {ProductoCatalogoUpdateComponent} from './producto-catalogo-update/producto-catalogo-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ProductoCatalogoCreateComponent,
    ProductoCatalogoDetailComponent,
    ProductoCatalogoListComponent,
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
