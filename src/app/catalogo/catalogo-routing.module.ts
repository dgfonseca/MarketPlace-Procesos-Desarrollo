import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'oferta',
    loadChildren: () => import('./oferta/oferta.module').then(module => module.OfertaModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then(module => module.PedidoModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then(module => module.ProductoModule)
  },
  {
    path: 'producto-catalogo',
    loadChildren: () => import('./producto-catalogo/producto-catalogo.module').then(module => module.ProductoCatalogoModule)
  },
  {
    path: 'canasta',
    loadChildren: () => import('./canasta/canasta.module').then(module => module.CanastaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule {
}
