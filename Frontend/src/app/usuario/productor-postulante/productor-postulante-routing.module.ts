import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductorPostulanteCreateComponent} from "./productor-postulante-create/productor-postulante-create.component";
import {ProductorPostulanteListComponent} from "./productor-postulante-list/productor-postulante-list.component";
import {ProductorPostulanteDetailComponent} from "./productor-postulante-detail/productor-posutlante-detail.component"

const routes: Routes = [
  {
    path: 'create',
    component: ProductorPostulanteCreateComponent
  },
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
