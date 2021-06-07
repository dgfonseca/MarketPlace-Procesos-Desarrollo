import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductoCatalogoListComponent} from './producto-catalogo-list/producto-catalogo-list.component';
import {CanastaListComponent} from './canasta-list/canasta-list.component';
import {EstablecerPrecioComponent} from './establecer-precio/establecer-precio.component';

const routes: Routes = [
  {
    path: 'canasta/list',
    component: CanastaListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'producto-catalogo/list',
    component: ProductoCatalogoListComponent
  },
  {
    path: 'producto-catalogo/establecer-precio/:id',
    component: EstablecerPrecioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
