'use client'
import type { IContext } from '@/context/myCart/Context'
import { useContext } from 'react'
import { MyCartContext } from '@/context'

export const useMyCart = (): IContext => {
  const ctx = useContext(MyCartContext)

  return ctx
}
