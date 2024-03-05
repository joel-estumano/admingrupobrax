import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancellationReasonCrudPageRoutingModule } from './cancellation-reason-crud-routing.module';

import { CancellationReasonCrudPage } from './cancellation-reason-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancellationReasonCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
  ],
  declarations: [CancellationReasonCrudPage],
})
export class CancellationReasonCrudPageModule {}
