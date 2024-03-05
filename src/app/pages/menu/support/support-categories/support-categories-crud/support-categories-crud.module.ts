import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportCategoriesCrudPageRoutingModule } from './support-categories-crud-routing.module';

import { SupportCategoriesCrudPage } from './support-categories-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportCategoriesCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
  ],
  declarations: [SupportCategoriesCrudPage],
})
export class SupportCategoriesCrudPageModule {}
