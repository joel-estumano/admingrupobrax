import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesCrudPage } from './sales-crud.page';

const routes: Routes = [
  {
    path: '',
    component: SalesCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesCrudPageRoutingModule {}
