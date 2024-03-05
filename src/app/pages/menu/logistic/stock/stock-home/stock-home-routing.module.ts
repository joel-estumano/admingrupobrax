import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockHomePage } from './stock-home.page';

const routes: Routes = [
  {
    path: '',
    component: StockHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockHomePageRoutingModule {}
