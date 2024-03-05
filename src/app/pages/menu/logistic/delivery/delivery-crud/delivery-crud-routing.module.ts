import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryCrudPage } from './delivery-crud.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryCrudPageRoutingModule {}
