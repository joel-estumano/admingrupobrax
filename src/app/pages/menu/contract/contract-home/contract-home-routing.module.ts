import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractHomePage } from './contract-home.page';

const routes: Routes = [
  {
    path: '',
    component: ContractHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractHomePageRoutingModule {}
