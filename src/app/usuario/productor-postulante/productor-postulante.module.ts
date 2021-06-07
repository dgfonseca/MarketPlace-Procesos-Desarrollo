import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductorPostulanteRoutingModule} from './productor-postulante-routing.module';
import { ProductorPostulanteListComponent } from "./productor-postulante-list/productor-postulante-list.component";

@NgModule({
  declarations: [
    ProductorPostulanteListComponent
  ],
  imports: [
    CommonModule,
    ProductorPostulanteRoutingModule
  ]
})
export class ProductorPostulanteModule {
}
