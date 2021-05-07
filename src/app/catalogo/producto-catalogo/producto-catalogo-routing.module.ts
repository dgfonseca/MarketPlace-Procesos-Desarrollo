import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductoCatalogoCreateComponent} from "./producto-catalogo-create/producto-catalogo-create.component";
import {ProductoCatalogoDetailComponent} from "./producto-catalogo-detail/producto-catalogo-detail.component";
import {ProductoCatalogoListComponent} from "./producto-catalogo-list/producto-catalogo-list.component";
import {ProductoCatalogoUpdateComponent} from "./producto-catalogo-update/producto-catalogo-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: ProductoCatalogoCreateComponent
  },
  {
    path: 'detail/:id',
    component: ProductoCatalogoDetailComponent
  },
  {
    path: 'list',
    component: ProductoCatalogoListComponent
  },
  {
    path: 'update/:id',
    component: ProductoCatalogoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoCatalogoRoutingModule {
}
