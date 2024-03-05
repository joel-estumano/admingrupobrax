import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceCategoriesCrudPage } from './finance-categories-crud.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceCategoriesCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceCategoriesCrudPageRoutingModule {}
