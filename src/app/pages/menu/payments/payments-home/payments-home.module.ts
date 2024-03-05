import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsHomePageRoutingModule } from './payments-home-routing.module';

import { PaymentsHomePage } from './payments-home.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsHomePageRoutingModule,
    CustomHeaderModule,
  ],
  declarations: [PaymentsHomePage],
})
export class PaymentsHomePageModule {}
