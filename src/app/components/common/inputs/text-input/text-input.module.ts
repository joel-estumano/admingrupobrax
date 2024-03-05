import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TextInputComponent],
  providers: [],
})
export class CustomTextInputModule {}
