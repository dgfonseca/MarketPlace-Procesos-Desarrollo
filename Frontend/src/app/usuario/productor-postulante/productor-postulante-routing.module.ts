import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductorPostulanteListComponent} from "./productor-postulante-list/productor-postulante-list.component";
import {ProductorPostulanteDetailComponent} from "./productor-postulante-detail/productor-posutlante-detail.component"

const routes: Routes = [
  {
    path: 'list',
    component: ProductorPostulanteListComponent
  },
  {
    path: 'detail/:id',
    component: ProductorPostulanteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductorPostulanteRoutingModule {
}
