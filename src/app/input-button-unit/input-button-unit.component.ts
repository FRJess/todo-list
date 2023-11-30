import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})

export class InputButtonUnitComponent {

  constructor() {
  }

  submitValue(input:HTMLInputElement): void {
    this.submit.emit(input.value);
    input.value = '';
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

}
