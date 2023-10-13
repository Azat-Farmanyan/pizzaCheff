import { Component } from '@angular/core';

export interface CharacteristicItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  characteristics: CharacteristicItem[] = [
    {
      title: 'Лучшее тесто',
      description:
        'Мы создаем тесто из отборной италянской муки наиавысшего качество',
      image: 'hop.png',
    },
    {
      title: 'Гарантия качество',
      description:
        'Наша пиццерия получила множество наград и признаний по всему миру',
      image: 'seo-and-web.png',
    },
    {
      title: 'Лучшие повара',
      description: 'ПИццы готовят самые итальянские повара',
      image: 'kitchen-pack.png',
    },
    {
      title: 'Оьборные рецепты',
      description:
        'Мы используем рецепты от мыровых лидеров в изготовлении пиццы',
      image: 'holidays.png',
    },
  ];
}
