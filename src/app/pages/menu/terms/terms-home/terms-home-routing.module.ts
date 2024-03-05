import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsHomePage } from './terms-home.page';

const routes: Routes = [
  {
    path: '',
    component: TermsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsHomePageRoutingModule {}
