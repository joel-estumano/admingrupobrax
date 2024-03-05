import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryCrudPageRoutingModule } from './delivery-crud-routing.module';

import { DeliveryCrudPage } from './delivery-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
  ],
  declarations: [DeliveryCrudPage],
})
export class DeliveryCrudPageModule {}
