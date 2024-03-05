import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SangriaPage } from './sangria.page';

const routes: Routes = [
  {
    path: '',
    component: SangriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SangriaPageRoutingModule {}
