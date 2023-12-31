'use client'
import { Button, Badge } from '@nextui-org/react'
import { LuShoppingCart } from 'react-icons/lu'
import { useMyCart } from '@/hooks'

export default function Cart (): JSX.Element {
  const { myCartList } = useMyCart()

  console.log(myCartList)

  return (
    <Badge
      content={myCartList.length.toString()}
      color='danger'
      isInvisible={myCartList.length === 0}
    >
      <Button
        isIconOnly
      >
        <LuShoppingCart className='w-5 h-5' />
      </Button>
    </Badge>
  )
}
