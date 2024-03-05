import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsCrudPage } from './payments-crud.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsCrudPageRoutingModule {}
