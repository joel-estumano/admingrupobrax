import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportExclusionsHomePage } from './support-exclusions-home.page';

const routes: Routes = [
  {
    path: '',
    component: SupportExclusionsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportExclusionsHomePageRoutingModule {}
