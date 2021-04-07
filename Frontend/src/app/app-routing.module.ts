import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import {HomeComponent} from "./home/home.component";
import {AuthModule} from "./auth/auth.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
    [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
      },
      {
        path: 'catalogo',
        loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(module => module.UsuarioModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
