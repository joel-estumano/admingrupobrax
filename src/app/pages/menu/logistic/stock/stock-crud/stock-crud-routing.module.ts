import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockCrudPage } from './stock-crud.page';

const routes: Routes = [
  {
    path: '',
    component: StockCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockCrudPageRoutingModule {}
