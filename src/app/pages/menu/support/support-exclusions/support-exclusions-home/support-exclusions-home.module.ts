import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportExclusionsHomePageRoutingModule } from './support-exclusions-home-routing.module';

import { SupportExclusionsHomePage } from './support-exclusions-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportExclusionsHomePageRoutingModule
  ],
  declarations: [SupportExclusionsHomePage]
})
export class SupportExclusionsHomePageModule {}
