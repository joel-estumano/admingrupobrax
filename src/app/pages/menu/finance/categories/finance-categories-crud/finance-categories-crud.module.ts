import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceCategoriesCrudPageRoutingModule } from './finance-categories-crud-routing.module';

import { FinanceCategoriesCrudPage } from './finance-categories-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomTextInputModule } from 'src/app/components/common/inputs/text-input/text-input.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceCategoriesCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTextInputModule,
  ],
  declarations: [FinanceCategoriesCrudPage]
})
export class FinanceCategoriesCrudPageModule {}
