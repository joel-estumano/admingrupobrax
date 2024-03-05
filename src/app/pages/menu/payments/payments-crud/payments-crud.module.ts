import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsCrudPageRoutingModule } from './payments-crud-routing.module';

import { PaymentsCrudPage } from './payments-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsCrudPageRoutingModule,
    CustomHeaderModule,
  ],
  declarations: [PaymentsCrudPage],
})
export class PaymentsCrudPageModule {}
