import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractCrudPage } from './contract-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ContractCrudPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractCrudPageRoutingModule {}
