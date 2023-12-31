'use client'
import type { IProduct } from '@/server/db'
import { useState, useReducer, useEffect, useRef } from 'react'
import Context from './Context'
import reducer from './reducer'
import { usePathname, useRouter } from 'next/navigation'
import { LS_MY_CART } from '@/config/consts'

export default function Provider ({
  children
}: React.PropsWithChildren): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  const effectRef = useRef<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    if (effectRef.current) return

    try {
      const getLs = localStorage.getItem(LS_MY_CART)

      if (getLs === null) throw new Error('No exists')

      const parse = JSON.parse(getLs)

      if (!Array.isArray(parse)) throw new Error('Should be an array')

      dispatch({
        type: 'ADD_LIST',
        payload: parse
      })
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

    return () => {
      effectRef.current = true
    }
  }, [])

  useEffect(() => {
    if (loading) return

    if (state.length === 0) {
      localStorage.removeItem(LS_MY_CART)
    } else {
      localStorage.setItem(LS_MY_CART, JSON.stringify(state))
    }

    if (pathname !== '/checkout' || state.length !== 0) return

    router.push('/')
  }, [state, loading])

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
      loading,
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
