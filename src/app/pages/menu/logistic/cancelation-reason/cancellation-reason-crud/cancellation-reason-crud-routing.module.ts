import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancellationReasonCrudPage } from './cancellation-reason-crud.page';

const routes: Routes = [
  {
    path: '',
    component: CancellationReasonCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancellationReasonCrudPageRoutingModule {}
