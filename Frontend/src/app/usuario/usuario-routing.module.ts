import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(module => module.ClienteModule)
  },
  {
    path: 'productor',
    loadChildren: () => import('./productor/productor.module').then(module => module.ProductorModule)
  },
  {
    path: 'productor-postulante',
    loadChildren: () => import('./productor-postulante/productor-postulante.module').then(module => module.ProductorPostulanteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
