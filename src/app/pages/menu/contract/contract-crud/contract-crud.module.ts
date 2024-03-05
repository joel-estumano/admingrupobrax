import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractCrudPageRoutingModule } from './contract-crud-routing.module';

import { ContractCrudPage } from './contract-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractCrudPageRoutingModule,
    CustomHeaderModule,
    CKEditorModule,
  ],
  declarations: [ContractCrudPage],
})
export class ContractCrudPageModule {}
