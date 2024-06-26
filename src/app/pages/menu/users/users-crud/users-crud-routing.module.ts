import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersCrudPage } from './users-crud.page';

const routes: Routes = [
  {
    path: '',
    component: UsersCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersCrudPageRoutingModule {}
