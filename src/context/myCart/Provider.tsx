'use client'
import type { IProduct } from '@/server/db'
import { useReducer, useEffect } from 'react'
import Context, { type IProductCart } from './Context'
import reducer from './reducer'
import { usePathname, useRouter } from 'next/navigation'
import { COOKIE_MY_CART } from '@/config/consts'
import cookies from 'js-cookie'

interface ProviderProps extends React.PropsWithChildren {
  initialCart: IProductCart[]
}

export default function Provider ({
  initialCart,
  children
}: ProviderProps): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  const [state, dispatch] = useReducer(reducer, initialCart)

  useEffect(() => {
    if (state.length === 0) {
      cookies.remove(COOKIE_MY_CART, { path: '/' })
    } else {
      const map = state.map((product) => ({ id: product.id, quantity: product.quantity }))

      cookies.set(COOKIE_MY_CART, btoa(JSON.stringify(map)))
    }

    if (pathname !== '/checkout' || state.length !== 0) return

    router.push('/')
  }, [state])

  const addProduct = (payload: IProduct): void => {
    dispatch({
      type: 'ADD',
      payload
    })
  }

  const removeProduct = (id: number): void => {
    dispatch({
      type: 'REMOVE',
      payload: id
    })
  }

  const quantityProduct = (type: 'plus' | 'minus', id: number): void => {
    dispatch({
      type: 'QUANTITY',
      payload: {
        id,
        type
      }
    })
  }

  return (
    <Context.Provider value={{
      myCartList: state,
      handlers: {
        addProduct,
        removeProduct,
        quantityProduct
      }
    }}
    >
      {children}
    </Context.Provider>
  )
}
