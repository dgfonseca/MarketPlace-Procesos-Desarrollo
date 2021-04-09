import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {AdminModule} from "./admin/admin.module";
import {AuthModule} from "./auth/auth.module";
import {CatalogoModule} from "./catalogo/catalogo.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    CatalogoModule,
    LayoutModule,
    UsuarioModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
