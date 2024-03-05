import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComissionsTypeCrudPage } from './comissions-type-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ComissionsTypeCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComissionsTypeCrudPageRoutingModule {}
