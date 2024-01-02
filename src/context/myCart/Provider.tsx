'use client'
import type { IProduct } from '@/server/db'
import { useReducer, useEffect, useRef } from 'react'
import Context, { type IProductCart } from './Context'
import reducer, { type IAction } from './reducer'
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
  const effectRef = useRef<boolean>(false)
  const broadcastChannelRef = useRef<BroadcastChannel | null>(null)
  const [state, dispatch] = useReducer(reducer, initialCart)

  useEffect(() => {
    if (effectRef.current) return

    const bc = new BroadcastChannel('myCart')

    broadcastChannelRef.current = bc

    bc.addEventListener('message', (e) => {
      dispatch(e.data)
    })

    return () => {
      effectRef.current = true
    }
  }, [])

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
    const action: IAction = {
      type: 'ADD',
      payload
    }

    dispatch(action)
    broadcastChannelRef.current?.postMessage(action)
  }

  const removeProduct = (id: number): void => {
    const payload: IAction = {
      type: 'REMOVE',
      payload: id
    }

    dispatch(payload)
    broadcastChannelRef.current?.postMessage(payload)
  }

  const quantityProduct = (type: 'plus' | 'minus', id: number): void => {
    const action: IAction = {
      type: 'QUANTITY',
      payload: {
        id,
        type
      }
    }

    dispatch(action)
    broadcastChannelRef.current?.postMessage(action)
  }

  const reset = (): void => {
    const action: IAction = {
      type: 'RESET'
    }

    dispatch(action)
    broadcastChannelRef.current?.postMessage(action)
  }

  return (
    <Context.Provider value={{
      myCartList: state,
      handlers: {
        addProduct,
        removeProduct,
        quantityProduct,
        reset
      }
    }}
    >
      {children}
    </Context.Provider>
  )
}
