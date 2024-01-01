'use client'
import { useEffect } from 'react'
import { LuCheckCircle2 } from 'react-icons/lu'
import { useMyCart } from '@/hooks'
import { Button } from '@nextui-org/react'
import NextLink from 'next/link'

export default function Success (): JSX.Element {
  const { handlers: { reset } } = useMyCart()

  useEffect(() => {
    reset()
  }, [])

  return (
    <div className='flex flex-col items-center text-center gap-4'>
      <LuCheckCircle2 className='size-16 text-success' />
      <h1 className='text-2xl font-medium'>Compra realizada satisfactoriamente!</h1>
      <p>Muchas gracias!, Recibiras un correo electrónico con la información de la compra.</p>
      <Button color='primary' size='lg' as={NextLink} href='/'>Volver al inicio</Button>
    </div>
  )
}
