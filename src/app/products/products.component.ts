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
      name: 'Strong Rug',
      price: 19.99,
      description:
        "This is Widget A. It's a fantastic product that will revolutionize your life.",
      category: 'Electronics',
      image:
        'https://www.amazon.com/Luxurious-Elegant-Carpets-Bedroom-Playroom/dp/B09NXV1SFB',
    },
    {
      id: 2,
      name: 'Hisense Tv',
      price: 29.99,
      description:
        'Introducing Gizmo B, the ultimate gadget for tech enthusiasts.',
      category: 'Electronics',
      image:
        'https://cdn.shopify.com/s/files/1/0280/4069/1789/products/Picsart_22-11-20_15-37-53-960.jpg?v=1668959615',
    },
    {
      id: 3,
      name: 'Super Toy',
      price: 9.99,
      description:
        'The Super Toy is a fun and interactive plaything for kids of all ages.',
      category: 'Toys',
      image: 'https://m.media-amazon.com/images/I/71CTY73XK5L.jpg',
    },
    {
      id: 4,
      name: 'Fashion Watch',
      price: 49.99,
      description: 'Stay stylish with our elegant and trendy Fashion Watch.',
      category: 'Fashion',
      image:
        'https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/share/classic-watches-datejust-all-models-share_m126233-0039_2107jva_001.jpg',
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      price: 79.99,
      description:
        'Monitor your health and track your fitness goals with our advanced Fitness Tracker.',
      category: 'Health & Fitness',
      image:
        'https://pyxis.nymag.com/v1/imgs/3be/54b/7a34aadc99a7c4290c204c434185cd7c58-3-24-Watch.rsquare.w1200.jpg',
    },
    {
      id: 6,
      name: 'Gourmet Coffee',
      price: 12.99,
      description:
        'Indulge in the rich flavors of our carefully selected Gourmet Coffee.',
      category: 'Food & Beverages',
      image:
        'https://images-cdn.ubuy.co.in/6350f473f68eee5c5a276ad1-cafe-de-loja-gourmet-coffee-beans.jpg',
    },
    {
      id: 7,
      name: 'Outdoor Adventure Kit',
      price: 39.99,
      description:
        'Embark on exciting outdoor adventures with our comprehensive Adventure Kit.',
      category: 'Sports & Outdoors',
      image: 'https://m.media-amazon.com/images/I/91p0sbAVpZS.jpg',
    },
    {
      id: 8,
      name: 'Classic Book Set',
      price: 59.99,
      description:
        'Immerse yourself in timeless literature with our Classic Book Set.',
      category: 'Books',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Harvard_Classics.jpg/1200px-Harvard_Classics.jpg',
    },
    {
      id: 9,
      name: 'Luxury Pen',
      price: 99.99,
      description:
        'Experience the joy of writing with our exquisite Luxury Pen.',
      category: 'Office Supplies',
      image:
        'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFHcFJzMVZPTEwuX0FDX1NMMTUwMF8uanBn.jpg',
    },
    {
      id: 10,
      name: 'Decorative Candle',
      price: 14.99,
      description:
        'Create a warm and cozy ambiance with our beautiful Decorative Candle.',
      category: 'Home Decor',
      image:
        'https://images.squarespace-cdn.com/content/v1/58dce485a5790a44f40dbde6/1606761328155-CX2NXFA8Z5XUSX5S4XGS/Decorating+candles+with+pressed+leaves',
    },
  ];
}
