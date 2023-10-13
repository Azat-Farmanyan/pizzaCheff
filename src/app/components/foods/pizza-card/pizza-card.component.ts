import { Component, Input } from '@angular/core';
import { Pizza } from '../foods.component';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
  @Input() item: Pizza;

  isOpen = false;
  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
