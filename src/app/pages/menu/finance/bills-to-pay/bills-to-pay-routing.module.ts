import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsToPayPage } from './bills-to-pay.page';

const routes: Routes = [
  {
    path: '',
    component: BillsToPayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsToPayPageRoutingModule {}
