import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolutionsHomePage } from './devolutions-home.page';

const routes: Routes = [
  {
    path: '',
    component: DevolutionsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolutionsHomePageRoutingModule {}
