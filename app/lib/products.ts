export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 90,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    description: "This is a very good laptop, please buy it asap"
  },
  {
    id: '2',
    name: 'Phone',
    price: 90,
    imageUrl: 'https://images.unsplash.com/photo-1490222939321-2a267366a124',
    description: "This is a very good phone, please buy it asap"
  },
  {
    id: '3',
    name: 'Pen',
    price: 90,
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    description: "This is a very good pen, please buy it asap"
  },
  {
    id: '4',
    name: 'Pencil',
    price: 90,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91',
    description: "This is a very good pencil, please buy it asap"
  }
]

export function getProductById(id: string) {
  return products.find(prod => prod.id == id)
}