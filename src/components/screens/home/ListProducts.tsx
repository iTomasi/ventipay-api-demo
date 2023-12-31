'use client'
import type { IProduct } from '@/server/db'
import CardProduct from '@/components/ui/CardProduct'
import { useMyCart } from '@/hooks'

interface ListProductsProps {
  data: IProduct[]
}

export default function ListProducts ({
  data
}: ListProductsProps): JSX.Element {
  const { myCartList, handlers: { addProduct } } = useMyCart()

  console.log(myCartList)

  const handleOnClickAdd = (payload: IProduct): void => {
    addProduct(payload)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        data.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            onClickAdd={handleOnClickAdd}
          />
        ))
      }
    </div>
  )
}
