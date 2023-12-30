'use client'
import type { IProduct } from '@/server/db'
import { Card, Button } from '@nextui-org/react'
import Image from 'next/image'

interface CardProductProps extends IProduct {
  onClickAdd: (value: IProduct) => void
}

export default function CardProduct ({
  onClickAdd,
  ...restProps
}: CardProductProps): JSX.Element {
  const { imageUrl, name, price } = restProps

  const handleOnPressAdd = (): void => {
    onClickAdd(restProps)
  }

  return (
    <Card className='aspect-square relative group'>
      <Image
        className='group-hover:scale-[1.1] transition-all'
        src={imageUrl}
        alt='asd'
        fill
      />

      <div className='absolute bottom-4 left-4 bg-white border border-gray-300 text-sm rounded-full pl-2 pr-1 py-1 flex items-center gap-2'>
        <h3>{name}</h3>
        <span className='bg-blue-400 rounded-full py-1 px-2'>${price.toLocaleString('en-US')}</span>
      </div>

      <Button className='absolute right-4 bottom-4' color='primary' onPress={handleOnPressAdd}>Agregar</Button>
    </Card>
  )
}
