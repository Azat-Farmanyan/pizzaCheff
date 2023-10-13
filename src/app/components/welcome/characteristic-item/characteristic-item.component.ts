import { Component, Input } from '@angular/core';
import { CharacteristicItem } from '../welcome.component';

@Component({
  selector: 'app-characteristic-item',
  templateUrl: './characteristic-item.component.html',
  styleUrls: ['./characteristic-item.component.scss'],
})
export class CharacteristicItemComponent {
  @Input() item: CharacteristicItem;
  imagePath = '../../../../assets/';
}
