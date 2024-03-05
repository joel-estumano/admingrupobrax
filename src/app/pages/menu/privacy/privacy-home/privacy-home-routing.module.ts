import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyHomePage } from './privacy-home.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyHomePageRoutingModule {}
