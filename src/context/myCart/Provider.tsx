'use client'
import type { IProduct } from '@/server/db'
import { useReducer } from 'react'
import Context from './Context'
import reducer from './reducer'

export default function Provider ({
  children
}: React.PropsWithChildren): JSX.Element {
  const [state, dispatch] = useReducer(reducer, [])

  const addProduct = (payload: IProduct): void => {
    dispatch({
      type: 'ADD',
      payload
    })
  }

  return (
    <Context.Provider value={{
      myCartList: state,
      handlers: {
        addProduct
      }
    }}
    >
      {children}
    </Context.Provider>
  )
}
