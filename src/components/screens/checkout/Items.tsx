'use client'
import { useMemo } from 'react'
import { useMyCart } from '@/hooks'
import CartItem from '@/components/ui/CartItem'

export default function Items (): JSX.Element {
  const { myCartList, handlers: { removeProduct, quantityProduct } } = useMyCart()

  const subTotal = useMemo(() => {
    let total = 0

    myCartList.forEach((item) => {
      total += item.price * item.quantity
    })

    return total.toLocaleString('es-CL')
  }, [myCartList])

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
    <div>
      <div className='flex flex-col gap-4 mb-4'>
        {
          myCartList.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onClickMinus={handleOnClickMinus}
              onClickPlus={handleOnClickPlus}
              onClickRemove={handleOnClickRemove}
            />
          ))
        }
      </div>

      <h5 className='font-medium'>Sub total: <span>${subTotal}</span></h5>
    </div>
  )
}
