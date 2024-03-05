import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomTabsModule } from 'src/app/components/common/custom-tabs/custom-tabs.module';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomPaginationModule } from 'src/app/components/common/pagination/pagination.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CustomTableModule } from 'src/app/components/common/table/table.module';
import { ReceivementsPage } from './receivements.page';
import { ReceivementsPageRoutingModule } from './receivements-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivementsPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTableModule,
    CustomTabsModule,
    CustomPaginationModule,
  ],
  declarations: [ReceivementsPage],
})
export class ReceivementsPageModule {}
