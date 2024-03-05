import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesCrudPageRoutingModule } from './categories-crud-routing.module';

import { CategoriesCrudPage } from './categories-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CustomTextInputModule } from 'src/app/components/common/inputs/text-input/text-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
    CustomTextInputModule,
  ],
  declarations: [CategoriesCrudPage],
})
export class CategoriesCrudPageModule {}
