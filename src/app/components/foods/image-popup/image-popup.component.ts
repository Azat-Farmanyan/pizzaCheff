import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss'],
})
export class ImagePopupComponent {
  @Input() image: string;
  @Input() open: boolean = false;

  @Output() onCLose = new EventEmitter();
}
