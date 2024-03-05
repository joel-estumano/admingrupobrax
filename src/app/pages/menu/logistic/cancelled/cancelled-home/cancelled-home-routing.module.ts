import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelledHomePage } from './cancelled-home.page';

const routes: Routes = [
  {
    path: '',
    component: CancelledHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelledHomePageRoutingModule {}
