import { v4 as uuid } from 'uuid'
import { faker } from '@faker-js/faker'

export const products = [
  {
    id: uuid(),
    name: 'Smartphone',
    description: faker.lorem.lines(4),
    price: 500,
    category: 'Electronics',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Wristwatch',
    description: faker.lorem.lines(4),
    price: 100,
    category: 'Fashion',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Power Drill',
    description: faker.lorem.lines(4),
    price: 80,
    category: 'Tools',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Chocolate Bars',
    description: faker.lorem.lines(4),
    price: 5,
    category: 'Food',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Laptop',
    description: faker.lorem.lines(4),
    price: 700,
    category: 'Electronics',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Sneakers',
    description: faker.lorem.lines(4),
    price: 60,
    category: 'Fashion',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Cordless Screwdriver',
    description: faker.lorem.lines(4),
    price: 40,
    category: 'Tools',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Gourmet Coffee',
    description: faker.lorem.lines(4),
    price: 12,
    category: 'Food',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Tablet',
    description: faker.lorem.lines(4),
    price: 250,
    category: 'Electronics',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Leather Wallet',
    description: faker.lorem.lines(4),
    price: 20,
    category: 'Fashion',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Circular Saw',
    description: faker.lorem.lines(4),
    price: 120,
    category: 'Tools',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Granola Bars',
    description: faker.lorem.lines(4),
    price: 2,
    category: 'Food',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Digital Camera',
    description: faker.lorem.lines(4),
    price: 200,
    category: 'Electronics',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'T-shirt',
    description: faker.lorem.lines(4),
    price: 15,
    category: 'Fashion',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Toolbox',
    description: faker.lorem.lines(4),
    price: 50,
    category: 'Tools',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Trail Mix',
    description: faker.lorem.lines(4),
    price: 8,
    category: 'Food',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Bluetooth Speaker',
    description: faker.lorem.lines(4),
    price: 40,
    category: 'Electronics',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Denim Jeans',
    description: faker.lorem.lines(4),
    price: 25,
    category: 'Fashion',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Screwdriver Set',
    description: faker.lorem.lines(4),
    price: 15,
    category: 'Tools',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
  {
    id: uuid(),
    name: 'Healthy Snack Bars',
    description: faker.lorem.lines(4),
    price: 4,
    category: 'Food',
    image_url: `https://picsum.photos/400?q=${uuid()}`,
  },
]
