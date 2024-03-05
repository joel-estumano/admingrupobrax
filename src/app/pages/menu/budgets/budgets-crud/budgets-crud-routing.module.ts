import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetsCrudPage } from './budgets-crud.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetsCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsCrudPageRoutingModule {}
