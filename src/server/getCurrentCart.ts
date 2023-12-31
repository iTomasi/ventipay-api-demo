import type { IProductCart } from '@/context/myCart/Context'
import { cookies } from 'next/headers'
import { COOKIE_MY_CART } from '@/config/consts'
import { products } from './db'

export const getCurrentCart = (): IProductCart[] => {
  const cookiesStore = cookies()

  const myCart = cookiesStore.get(COOKIE_MY_CART)

  if (myCart === undefined) return []

  try {
    const decode = atob(myCart.value)

    const parse = JSON.parse(decode) as [{ id: number, quantity: number }]

    if (!Array.isArray(parse)) throw new Error('Should be an array')

    const map = parse.map((value) => {
      if (typeof value.id !== 'number') return false

      const find = products.find((product) => product.id === value.id)

      if (find === undefined) return false

      return {
        ...find,
        quantity: value.quantity < 1 ? 1 : value.quantity
      }
    })

    const filter = map.filter(Boolean)

    return filter as IProductCart[]
  } catch {
    return []
  }
}
