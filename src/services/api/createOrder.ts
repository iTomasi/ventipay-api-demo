import { FetchApi } from '@/services/FetchBase'

interface IPayload {
  fullName: string
  email: string
}

const createOrder = async (payload: IPayload): Promise<string> => {
  const fetching = await FetchApi(
    '/create-order',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  const data = await fetching.json()

  if (typeof data.message === 'string') throw new Error(data.message)

  return data.url
}

export default createOrder
