import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportCategoriesCrudPage } from './support-categories-crud.page';

const routes: Routes = [
  {
    path: '',
    component: SupportCategoriesCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportCategoriesCrudPageRoutingModule {}
