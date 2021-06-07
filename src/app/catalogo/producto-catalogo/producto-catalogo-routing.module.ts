import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductoCatalogoCreateComponent} from "./producto-catalogo-create/producto-catalogo-create.component";
import {ProductoCatalogoUpdateComponent} from "./producto-catalogo-update/producto-catalogo-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: ProductoCatalogoCreateComponent
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
