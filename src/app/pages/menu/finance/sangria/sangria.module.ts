import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SangriaPageRoutingModule } from './sangria-routing.module';

import { SangriaPage } from './sangria.page';
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
    SangriaPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTableModule,
    CustomTabsModule,
    CustomPaginationModule,
  ],
  declarations: [SangriaPage]
})
export class SangriaPageModule {}
