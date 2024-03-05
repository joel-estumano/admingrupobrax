import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Step6Component } from './step6.component';

@NgModule({
  declarations: [Step6Component],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [Step6Component],
  providers: [],
})
export class CustomStep6Module {}
