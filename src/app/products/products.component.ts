import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  products = [
    {
      id: 1,
      breed: 'Polar Bear',
      price: 5000,
      color: 'White',
      size: 'Large',
      habitat: 'Arctic',
      rarity: 'rare',
      image:
        'https://environment.co/wp-content/uploads/sites/4/2022/10/hans-jurgen-mager-LVT82myoXSE-unsplash.jpg',
      description:
        'The polar bear is a large bear species native to the Arctic. It has a thick white fur coat and is adapted to living in freezing temperatures.',
    },
    {
      id: 2,
      breed: 'Grizzly Bear',
      price: 3000,
      color: 'Brown',
      size: 'Large',
      habitat: 'North America',
      rarity: 'common',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/800px-2010-kodiak-bear-1.jpg',
      description:
        'The grizzly bear is a powerful bear species found in North America. It has a distinctive hump on its shoulders and can be brown, black, or blonde in color.',
    },
    {
      id: 3,
      breed: 'Black Bear',
      price: 2000,
      color: 'Black',
      size: 'Medium',
      rarity: 'common',
      habitat: 'North America',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/23/2014/08/GettyImages-635725340-33bbe2e.jpg?quality=90&resize=980,654',
      description:
        'The black bear is a medium-sized bear species found in various parts of North America. Despite its name, it can be black, brown, or even blonde in color.',
    },
    {
      id: 4,
      breed: 'Panda Bear',
      price: 6000,
      color: 'Black and White',
      size: 'Medium',
      habitat: 'China',
      rarity: 'rare',
      image:
        'https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2020/08/1140-panda-smithsonian.jpg',
      description:
        'The panda bear is a beloved bear species native to China. It is known for its distinctive black and white fur pattern and its bamboo diet.',
    },
    {
      id: 5,
      breed: 'Kodiak Bear',
      price: 4000,
      color: 'Brown',
      size: 'Large',
      habitat: 'Alaska',
      rarity: 'rare',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/640px-2010-kodiak-bear-1.jpg',
      description:
        'The Kodiak bear is a subspecies of the brown bear found in the Kodiak Archipelago of Alaska. It is one of the largest bear species.',
    },
    {
      id: 6,
      breed: 'Sloth Bear',
      price: 3500,
      color: 'Black',
      size: 'Medium',
      habitat: 'India',
      rarity: 'rare',
      image:
        'https://nationalzoo.si.edu/sites/default/files/animals/slothbear-002.jpg',
      description:
        'The sloth bear is a bear species found in the Indian subcontinent. It has long claws and a shaggy coat, and it primarily feeds on insects.',
    },
    {
      id: 7,
      breed: 'Sun Bear',
      price: 4500,
      color: 'Black',
      size: 'Small',
      habitat: 'Southeast Asia',
      rarity: 'common',
      image:
        'https://cdn.britannica.com/12/232812-050-918C866F/Sun-bear-Helarctos-malayanus-tongue.jpg',
      description:
        'The sun bear is the smallest bear species and is found in Southeast Asia. It has a distinctive golden crescent-shaped mark on its chest.',
    },
    {
      id: 8,
      breed: 'Andean Bear',
      price: 5500,
      color: 'Black',
      size: 'Medium',
      habitat: 'South America',
      rarity: 'common',
      image:
        'https://www.volunteerlatinamerica.com/up-images/blog-images/andean-bear-all-you-need-to-know.jpg',
      description:
        'The Andean bear, also known as the spectacled bear, is found in the Andean region of South America. It is the only bear species native to South America.',
    },
    {
      id: 9,
      breed: 'Spectacled Bear',
      price: 5200,
      color: 'Black',
      size: 'Medium',
      habitat: 'South America',
      rarity: 'rare',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Urso_de_%C3%B3culos.jpg',
      description:
        'The spectacled bear, also known as the Andean bear, is found in the Andean region of South America. It is named after the distinctive rings around its eyes.',
    },
    {
      id: 10,
      breed: 'Malayan Sun Bear',
      price: 4800,
      color: 'Black',
      size: 'Small',
      habitat: 'Southeast Asia',
      rarity: 'common',
      image:
        'https://wildark.org/wp-content/uploads/2019/05/AdobeStock_129134705_p.jpg',
      description:
        'The Malayan sun bear is a small bear species found in Southeast Asia. It has a dark coat and a distinctive orange or yellow crescent mark on its chest.',
    },
    {
      id: 11,
      breed: 'American Black Bear',
      price: 2800,
      color: 'Black',
      size: 'Medium',
      habitat: 'North America',
      rarity: 'rare',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/23/2014/08/GettyImages-635725340-33bbe2e.jpg?quality=90&resize=980,654',
      description:
        'The American black bear is a medium-sized bear species found in various parts of North America. It can have different color variations, including black, brown, or blonde.',
    },
  ];

  getAllProducts() {
    return this.products.length;
  }

  getRareProducts() {
    return this.products.filter((product) => product.rarity === 'rare').length;
  }

  getCommonProducts() {
    return this.products.filter((product) => product.rarity === 'common')
      .length;
  }

  changedInputValue: string = 'all';

  onRadioInputChange(data: string) {
    this.changedInputValue = data;
  }
}
