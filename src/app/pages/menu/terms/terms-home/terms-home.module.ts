import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsHomePageRoutingModule } from './terms-home-routing.module';

import { TermsHomePage } from './terms-home.page';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsHomePageRoutingModule,
    CustomHeaderModule,
    CKEditorModule,
  ],
  declarations: [TermsHomePage],
})
export class TermsHomePageModule {}
