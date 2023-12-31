'use client'
import { useState } from 'react'
import { Button, Badge } from '@nextui-org/react'
import { LuShoppingCart } from 'react-icons/lu'
import { useMyCart } from '@/hooks'
import EmptyState from './EmptyState'
import Slider from '@/components/ui/Slider'
import List from './List'
import Footer from './Footer'

export default function Cart (): JSX.Element {
  const [show, setShow] = useState<boolean>(false)
  const { myCartList } = useMyCart()

  const hasItem = myCartList.length !== 0

  const handleOnPress = (): void => {
    setShow(true)
  }

  const handleOnClickCheckout = (): void => {
    setShow(false)
  }

  return (
    <>
      <Badge
        content={myCartList.length.toString()}
        color='danger'
        isInvisible={!hasItem}
      >
        <Button
          isIconOnly
          onPress={handleOnPress}
        >
          <LuShoppingCart className='w-5 h-5' />
        </Button>
      </Badge>

      <Slider
        title='Mi carrito'
        show={show}
        setShow={setShow}
        footer={
          hasItem ? <Footer onClickCheckout={handleOnClickCheckout} /> : undefined
        }
      >
        {
          hasItem
            ? <List />
            : <EmptyState />
        }
      </Slider>
    </>
  )
}
