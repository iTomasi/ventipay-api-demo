'use client'
import type { IProduct } from '@/server/db'
import { createContext } from 'react'

export interface IProductCart extends IProduct {
  quantity: number
}

export interface IContext {
  myCartList: IProductCart[]
  handlers: IHandlers
}

interface IHandlers {
  addProduct: (value: IProduct) => void
  removeProduct: (id: number) => void
  quantityProduct: (type: 'plus' | 'minus', id: number) => void
}

const Context = createContext<IContext>({
  myCartList: [],
  handlers: {
    addProduct: () => {},
    removeProduct: () => {},
    quantityProduct: () => {}
  }
})

export default Context
