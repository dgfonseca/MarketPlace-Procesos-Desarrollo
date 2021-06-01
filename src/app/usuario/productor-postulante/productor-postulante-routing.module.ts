import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductorPostulanteCreateComponent} from "./productor-postulante-create/productor-postulante-create.component";

const routes: Routes = [
  {
    path: 'create',
    component: ProductorPostulanteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductorPostulanteRoutingModule {
}
