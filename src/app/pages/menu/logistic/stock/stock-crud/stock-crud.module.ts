import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockCrudPageRoutingModule } from './stock-crud-routing.module';

import { StockCrudPage } from './stock-crud.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CustomSubHeaderModule } from 'src/app/components/common/sub-header/sub-header.component.module';
import { CategoriesCrudPageRoutingModule } from '../../categories/categories-crud/categories-crud-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockCrudPageRoutingModule,
    CategoriesCrudPageRoutingModule,
    CustomHeaderModule,
    CustomSubHeaderModule,
  ],
  declarations: [StockCrudPage],
})
export class StockCrudPageModule {}
