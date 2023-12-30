import { Button } from '@nextui-org/react'
import { LuShoppingCart } from 'react-icons/lu'

export default function Cart (): JSX.Element {
  return (
    <Button
      isIconOnly
    >
      <LuShoppingCart className='w-5 h-5' />
    </Button>
  )
}