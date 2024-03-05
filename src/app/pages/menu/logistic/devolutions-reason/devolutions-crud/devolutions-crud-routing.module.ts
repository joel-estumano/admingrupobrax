import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolutionsCrudPage } from './devolutions-crud.page';

const routes: Routes = [
  {
    path: '',
    component: DevolutionsCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolutionsCrudPageRoutingModule {}
