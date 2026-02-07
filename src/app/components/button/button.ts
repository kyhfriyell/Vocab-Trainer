import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() disabled = false;
  
}
