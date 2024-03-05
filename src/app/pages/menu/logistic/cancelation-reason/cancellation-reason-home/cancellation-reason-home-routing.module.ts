import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancellationReasonHomePage } from './cancellation-reason-home.page';

const routes: Routes = [
  {
    path: '',
    component: CancellationReasonHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancellationReasonHomePageRoutingModule {}
