import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractHomePageRoutingModule } from './contract-home-routing.module';

import { ContractHomePage } from './contract-home.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractHomePageRoutingModule,
    CustomHeaderModule,
  ],
  declarations: [ContractHomePage],
})
export class ContractHomePageModule {}
