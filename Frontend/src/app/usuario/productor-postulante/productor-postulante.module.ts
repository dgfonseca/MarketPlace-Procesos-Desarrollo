import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductorPostulanteRoutingModule} from './productor-postulante-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductorPostulanteCreateComponent} from './productor-postulante-create/productor-postulante-create.component';

@NgModule({
  declarations: [
    ProductorPostulanteCreateComponent
  ],
  imports: [
    CommonModule,
    ProductorPostulanteRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductorPostulanteModule {
}
