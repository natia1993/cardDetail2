import product1 from './images/image-product-1.jpg';
import product2 from './images/image-product-2.jpg';
import product3 from './images/image-product-3.jpg';
import product4 from './images/image-product-4.jpg';
import product5 from './images/image-product-1-thumbnail.jpg';
import product6 from './images/image-product-2-thumbnail.jpg';
import product7 from './images/image-product-3-thumbnail.jpg';
import product8 from './images/image-product-4-thumbnail.jpg';

export const products = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125,
    image: product1,       // დიდ სურათად გამოვა detail-ში
    thumbnail: product5,   // მცირე სურათი Home-ზე
  },
  {
    id: 2,
    title: "Fall Limited Edition Sneakers",
    description: "Modern design and durability",
    price: 150,
    image: product2,
    thumbnail: product6,
  },
  {
    id: 3,
    title: "Fall Limited Edition Sneakers",
    description: "Sleek and lightweight",
    price: 100,
    image: product3,
    thumbnail: product7,
  },
  {
    id: 4,
    title: "Fall Limited Edition Sneakers",
    description: "Bold and stylish",
    price: 110,
    image: product4,
    thumbnail: product8,
  },
];
