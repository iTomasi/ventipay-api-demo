import type { IProductCart } from '@/context/myCart/Context'
import { Avatar, Button } from '@nextui-org/react'
import { LuX, LuPlus, LuMinus } from 'react-icons/lu'

interface CartItemProps extends IProductCart {
  onClickRemove: (id: number) => void
  onClickPlus: (id: number) => void
  onClickMinus: (id: number) => void
}

export default function CartItem ({
  onClickRemove,
  onClickPlus,
  onClickMinus,
  ...restProps
}: CartItemProps): JSX.Element {
  const { id, imageUrl, name, price, quantity } = restProps

  const handleOnClickRemove = (): void => {
    onClickRemove(id)
  }

  const handleOnPressPlus = (): void => {
    onClickPlus(id)
  }

  const handleOnPressMinus = (): void => {
    onClickMinus(id)
  }

  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2.5'>
        <div className='relative max-w-max'>
          <Avatar
            className='w-14 h-14'
            src={imageUrl}
            radius='md'
          />

          <button
            type='button'
            className='absolute size-5 bg-danger -top-1 -right-1 rounded-full grid place-items-center'
            onClick={handleOnClickRemove}
          >
            <LuX className='size-3.5 text-danger-foreground' />
          </button>
        </div>

        <div className='text-sm'>
          <h5>{name}</h5>
          <span>${(price * quantity).toLocaleString('es-CL')}</span>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <Button size='sm' isIconOnly onPress={handleOnPressMinus}>
          <LuMinus className='size-4' />
        </Button>
        <span>{quantity}</span>
        <Button size='sm' isIconOnly onPress={handleOnPressPlus}>
          <LuPlus className='size-4' />
        </Button>

      </div>
    </div>
  )
}
