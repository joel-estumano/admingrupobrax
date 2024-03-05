import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsHomePage } from './payments-home.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsHomePageRoutingModule {}
