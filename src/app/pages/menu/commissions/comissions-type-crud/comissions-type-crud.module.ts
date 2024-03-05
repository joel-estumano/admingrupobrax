import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComissionsTypeCrudPageRoutingModule } from './comissions-type-crud-routing.module';

import { ComissionsTypeCrudPage } from './comissions-type-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomTextInputModule } from 'src/app/components/common/inputs/text-input/text-input.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComissionsTypeCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTextInputModule,
  ],
  declarations: [ComissionsTypeCrudPage]
})
export class ComissionsTypeCrudPageModule {}
