import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() input: {
    title: string;
    type: string;
    value?: string;
    placeholder?: string;
  };
  @Input() disabled = true;

  @Output() change: any = new EventEmitter();
  constructor() {}
}
