import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesCrudPage } from './categories-crud.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesCrudPageRoutingModule {}
