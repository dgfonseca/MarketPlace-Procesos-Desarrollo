import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OfertaRoutingModule} from './oferta-routing.module';
import {OfertaCreateComponent} from './oferta-create/oferta-create.component';
import {OfertaDetailComponent} from './oferta-detail/oferta-detail.component';
import {OfertaListComponent} from './oferta-list/oferta-list.component';
import {OfertaUpdateComponent} from './oferta-update/oferta-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    OfertaCreateComponent,
    OfertaDetailComponent,
    OfertaListComponent,
    OfertaUpdateComponent
  ],
  imports: [
    CommonModule,
    OfertaRoutingModule,
    FontAwesomeModule
  ]
})
export class OfertaModule {
}
