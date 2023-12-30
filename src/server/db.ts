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
  }
]
