import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyHomePageRoutingModule } from './privacy-home-routing.module';

import { PrivacyHomePage } from './privacy-home.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyHomePageRoutingModule,
    CustomHeaderModule,
    CKEditorModule,
  ],
  declarations: [PrivacyHomePage],
})
export class PrivacyHomePageModule {}
