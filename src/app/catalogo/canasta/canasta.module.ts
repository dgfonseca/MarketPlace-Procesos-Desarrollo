import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanastaRoutingModule } from './canasta-routing.module';
import { CanastaDetailComponent } from './canasta-detail/canasta-detail.component';
import { CanastaCreateComponent } from './canasta-create/canasta-create.component';
import { CanastaListComponent } from './canasta-list/canasta-list.component';
import { CanastaUpdateComponent } from './canasta-update/canasta-update.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    CanastaDetailComponent,
    CanastaCreateComponent,
    CanastaListComponent,
    CanastaUpdateComponent
  ],
  imports: [
    CommonModule,
    CanastaRoutingModule,
    FontAwesomeModule
  ]
})
export class CanastaModule { }
