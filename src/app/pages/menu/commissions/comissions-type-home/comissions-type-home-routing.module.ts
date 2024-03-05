import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComissionsTypeHomePage } from './comissions-type-home.page';

const routes: Routes = [
  {
    path: '',
    component: ComissionsTypeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComissionsTypeHomePageRoutingModule {}
