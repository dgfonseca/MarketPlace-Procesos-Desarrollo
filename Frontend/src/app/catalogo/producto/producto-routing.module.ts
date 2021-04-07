import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductoCreateComponent} from "./producto-create/producto-create.component";
import {ProductoUpdateComponent} from "./producto-update/producto-update.component";
import {ProductoListComponent} from "./producto-list/producto-list.component";
import {ProductoDetailComponent} from "./producto-detail/producto-detail.component";

const routes: Routes = [
  {
    path: 'create',
    component: ProductoCreateComponent
  },
  {
    path: 'detail/:id',
    component: ProductoDetailComponent
  },
  {
    path: 'list',
    component: ProductoListComponent
  },
  {
    path: 'update/:id',
    component: ProductoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
