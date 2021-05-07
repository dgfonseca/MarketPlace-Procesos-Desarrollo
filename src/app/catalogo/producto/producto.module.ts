import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoUpdateComponent } from './producto-update/producto-update.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';


@NgModule({
  declarations: [
    ProductoListComponent,
    ProductoDetailComponent,
    ProductoUpdateComponent,
    ProductoCreateComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
