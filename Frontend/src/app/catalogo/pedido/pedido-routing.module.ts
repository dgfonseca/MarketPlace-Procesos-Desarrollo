import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./pedido-cliente/pedido-cliente.module').then(module => module.PedidoClienteModule)
  },
  {
    path: 'productor',
    loadChildren: () => import('./pedido-productor/pedido-productor.module').then(module => module.PedidoProductorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule {
}
