import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesHomePage } from './sales-home.page';

const routes: Routes = [
  {
    path: '',
    component: SalesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesHomePageRoutingModule {}
