import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OfertaCreateComponent} from "./oferta-create/oferta-create.component";
import {OfertaDetailComponent} from "./oferta-detail/oferta-detail.component";
import {OfertaListComponent} from "./oferta-list/oferta-list.component";
import {OfertaUpdateComponent} from "./oferta-update/oferta-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: OfertaCreateComponent
  },
  {
    path: 'detail/:id',
    component: OfertaDetailComponent
  },
  {
    path: 'list',
    component: OfertaListComponent
  },
  {
    path: 'update/:id',
    component: OfertaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaRoutingModule { }
