'use client'
import CartItem from '@/components/ui/CartItem'
import { useMyCart } from '@/hooks'

export default function List (): JSX.Element {
  const { myCartList, handlers: { removeProduct, quantityProduct } } = useMyCart()

  const handleOnClickRemove = (id: number): void => {
    removeProduct(id)
  }

  const handleOnClickPlus = (id: number): void => {
    quantityProduct('plus', id)
  }

  const handleOnClickMinus = (id: number): void => {
    quantityProduct('minus', id)
  }

  return (
    <div className='flex flex-col gap-4'>
      {
        myCartList.map((item) => (
          <CartItem
            key={item.id}
            onClickRemove={handleOnClickRemove}
            onClickMinus={handleOnClickMinus}
            onClickPlus={handleOnClickPlus}
            {...item}
          />
        ))
      }
    </div>
  )
}
