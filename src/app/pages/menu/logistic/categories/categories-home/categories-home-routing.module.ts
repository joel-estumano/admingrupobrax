import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesHomePage } from './categories-home.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesHomePageRoutingModule {}
