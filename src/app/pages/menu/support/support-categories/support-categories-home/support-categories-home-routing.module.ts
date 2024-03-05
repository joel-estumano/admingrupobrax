import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportCategoriesHomePage } from './support-categories-home.page';

const routes: Routes = [
  {
    path: '',
    component: SupportCategoriesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportCategoriesHomePageRoutingModule {}
