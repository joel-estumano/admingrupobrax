import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportCategoriesHomePageRoutingModule } from './support-categories-home-routing.module';

import { SupportCategoriesHomePage } from './support-categories-home.page';
import { CustomTabsModule } from 'src/app/components/common/custom-tabs/custom-tabs.module';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomPaginationModule } from 'src/app/components/common/pagination/pagination.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CustomTableModule } from 'src/app/components/common/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportCategoriesHomePageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTableModule,
    CustomTabsModule,
    CustomPaginationModule,
  ],
  declarations: [SupportCategoriesHomePage],
})
export class SupportCategoriesHomePageModule {}
