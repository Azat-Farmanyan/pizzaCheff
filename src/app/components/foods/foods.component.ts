import { Component } from '@angular/core';

export interface Pizza {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent {
  menu: Pizza[] = [
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 2.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 3.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 4.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 5.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 6.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 7.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 8.png',
    },
    {
      title: 'title',
      description: 'description',
      image: '../../../../assets/Layer 9.png',
    },
  ];
}
