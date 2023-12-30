interface IProduct {
  id: number
  name: string
  price: number
  imageUrl: string
}

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Shirt',
    price: 50_000,
    imageUrl: '/t-shirt-spiral-1.avif'
  },
  {
    id: 2,
    name: 'Hat',
    price: 20_000,
    imageUrl: '/hat-1.avif'
  },
  {
    id: 3,
    name: 'Mug',
    price: 10_000,
    imageUrl: '/mug-1.avif'
  }
]
