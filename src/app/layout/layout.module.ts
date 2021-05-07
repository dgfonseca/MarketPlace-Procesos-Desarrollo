import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderComponent} from './layout-header/layout-header.component';
import {LayoutFooterComponent} from './layout-footer/layout-footer.component';
import {RouterModule} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";


@NgModule({
  declarations: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutComponent
  ]
})
export class LayoutModule {
}
