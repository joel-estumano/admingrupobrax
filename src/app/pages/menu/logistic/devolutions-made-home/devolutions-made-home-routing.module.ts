import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolutionsMadeHomePage } from './devolutions-made-home.page';

const routes: Routes = [
  {
    path: '',
    component: DevolutionsMadeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolutionsMadeHomePageRoutingModule {}
