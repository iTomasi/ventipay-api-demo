import { Card } from '@nextui-org/react'
import Image from 'next/image'

export default function CardProduct (): JSX.Element {
  return (
    <Card className='aspect-square relative group outline-red-400'>
      <Image
        className='group-hover:scale-[1.1] transition-all'
        src='/t-shirt-spiral-1.avif'
        alt='asd'
        fill
      />
    </Card>
  )
}
