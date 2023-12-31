import type { IProductCart } from './Context'

interface IAction {
  type: 'ADD'
  payload: any
}

const reducer = (state: IProductCart[], action: IAction): IProductCart[] => {
  const { type, payload } = action

  switch (type) {
    case 'ADD': {
      const findIndex = state.findIndex((product) => product.id === payload.id)

      if (findIndex === -1) return [...state, { ...payload, quantity: 1 }]

      const clone = structuredClone(state)

      clone[findIndex].quantity += 1

      return clone
    }
    default:
      return state
  }
}

export default reducer
