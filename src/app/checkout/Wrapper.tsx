'use client'
import { useMyCart } from '@/hooks'

export default function Wrapper ({
  children
}: React.PropsWithChildren): JSX.Element {
  const { loading } = useMyCart()

  if (loading) return <p>Cargando...</p>

  return (
    <>
      {children}
    </>
  )
}
