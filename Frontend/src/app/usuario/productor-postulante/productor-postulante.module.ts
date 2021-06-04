import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductorPostulanteRoutingModule} from './productor-postulante-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProductorPostulanteCreateComponent } from "./productor-postulante-create/productor-postulante-create.component";
import { ProductorPostulanteListComponent } from "./productor-postulante-list/productor-postulante-list.component";

@NgModule({
  declarations: [
    ProductorPostulanteCreateComponent,
    ProductorPostulanteListComponent

  ],
  imports: [
    CommonModule,
    ProductorPostulanteRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductorPostulanteModule {
}
