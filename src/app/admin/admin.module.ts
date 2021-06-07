import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductoCatalogoListComponent} from './producto-catalogo-list/producto-catalogo-list.component';
import {HomeComponent} from './home/home.component';
import {CanastaListComponent} from './canasta-list/canasta-list.component';
import {EstablecerPrecioComponent} from './establecer-precio/establecer-precio.component';

@NgModule({
  declarations: [
    ProductoCatalogoListComponent,
    HomeComponent,
    CanastaListComponent,
    EstablecerPrecioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ]
})
export class AdminModule {
}
