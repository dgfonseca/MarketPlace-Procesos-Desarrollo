import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanastaCreateComponent} from "./canasta-create/canasta-create.component";
import {CanastaDetailComponent} from "./canasta-detail/canasta-detail.component";
import {CanastaListComponent} from "./canasta-list/canasta-list.component";
import {CanastaUpdateComponent} from "./canasta-update/canasta-update.component";

const routes: Routes = [
  {
    path: 'create',
    component: CanastaCreateComponent
  },
  {
    path: 'detail/:id',
    component: CanastaDetailComponent
  },
  {
    path: 'list',
    component: CanastaListComponent
  },
  {
    path: 'update/:id',
    component: CanastaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanastaRoutingModule { }
