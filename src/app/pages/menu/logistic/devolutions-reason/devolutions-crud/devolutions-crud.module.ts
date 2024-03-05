import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevolutionsCrudPageRoutingModule } from './devolutions-crud-routing.module';

import { DevolutionsCrudPage } from './devolutions-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevolutionsCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
  ],
  declarations: [DevolutionsCrudPage],
})
export class DevolutionsCrudPageModule {}
