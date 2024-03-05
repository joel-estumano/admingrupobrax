import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesCrudPageRoutingModule } from './sales-crud-routing.module';

import { SalesCrudPage } from './sales-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CustomTextInputModule } from 'src/app/components/common/inputs/text-input/text-input.module';
import { CustomTabsModule } from 'src/app/components/common/custom-tabs/custom-tabs.module';
import { CustomStep3Module } from './inside-pages/step3/step3.module';
import { CustomStep5Module } from './inside-pages/step5/step5.module';
import { CustomStep6Module } from './inside-pages/step6/step6.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTextInputModule,
    CustomTabsModule,
    CustomStep3Module,
    CustomStep5Module,
    CustomStep6Module,
  ],
  declarations: [SalesCrudPage],
})
export class SalesCrudPageModule {}
