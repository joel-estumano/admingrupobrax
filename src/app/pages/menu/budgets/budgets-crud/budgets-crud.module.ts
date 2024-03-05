import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetsCrudPageRoutingModule } from './budgets-crud-routing.module';

import { BudgetsCrudPage } from './budgets-crud.page';
import { CustomTabsModule } from 'src/app/components/common/custom-tabs/custom-tabs.module';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomTextInputModule } from 'src/app/components/common/inputs/text-input/text-input.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CustomStep3Module } from '../../sales/sales-crud/inside-pages/step3/step3.module';
import { CustomStep5Module } from '../../sales/sales-crud/inside-pages/step5/step5.module';
import { CustomStep6Module } from '../../sales/sales-crud/inside-pages/step6/step6.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetsCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTextInputModule,
    CustomTabsModule,
    CustomStep3Module,
    CustomStep5Module,
    CustomStep6Module,
  ],
  declarations: [BudgetsCrudPage],
})
export class BudgetsCrudPageModule {}
