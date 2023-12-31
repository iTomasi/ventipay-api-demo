'use client'
import { useMemo } from 'react'
import { Button } from '@nextui-org/react'
import { useMyCart } from '@/hooks'
import NextLink from 'next/link'

interface FooterProps {
  onClickCheckout: React.MouseEventHandler<HTMLButtonElement>
}

export default function Footer ({
  onClickCheckout
}: FooterProps): JSX.Element {
  const { myCartList } = useMyCart()

  const subTotal = useMemo(() => {
    let total = 0

    myCartList.forEach((product) => {
      total += product.price * product.quantity
    })

    return total.toLocaleString('es-CL')
  }, [myCartList])

  return (
    <div>
      <h3 className='mb-2'>Sub total: ${subTotal}</h3>

      <Button href='/checkout' className='w-full' color='primary' as={NextLink} onClick={onClickCheckout}>Ir a pagar</Button>
    </div>
  )
}
