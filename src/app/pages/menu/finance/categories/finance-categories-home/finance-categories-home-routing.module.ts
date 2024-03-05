import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceCategoriesHomePage } from './finance-categories-home.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceCategoriesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceCategoriesHomePageRoutingModule {}
