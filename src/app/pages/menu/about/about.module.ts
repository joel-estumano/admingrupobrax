import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CustomHeaderModule } from 'src/app/components/common/header/header.component.module';
import { IonicModule } from '@ionic/angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutService } from './services/about.service';
import { CKEditorFileService } from './services/ckeditor-file.service';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CustomHeaderModule,
    IonicModule,
    CKEditorModule
  ],
  providers: [AboutService, CKEditorFileService]
})
export class AboutModule { }
