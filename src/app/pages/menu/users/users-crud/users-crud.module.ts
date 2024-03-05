import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersCrudPageRoutingModule } from './users-crud-routing.module';

import { UsersCrudPage } from './users-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersCrudPageRoutingModule,
    CustomHeaderModule,
  ],
  declarations: [UsersCrudPage],
})
export class UsersCrudPageModule {}
