import { VENTIPAY_API_KEY_SECRET } from './envs'

const VENTIPAY_BASIC_AUTHORIZATION = btoa(VENTIPAY_API_KEY_SECRET + ':' + '')

export const FetchVentiPay = async (pathname: string, init?: RequestInit): Promise<Response> => {
  console.log(VENTIPAY_API_KEY_SECRET)
  const fetching = await fetch(
    'https://api.ventipay.com/v1' + pathname,
    {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Basic ${VENTIPAY_BASIC_AUTHORIZATION}`
      }
    }
  )

  if (!fetching.ok) throw new Error(`Error: ${fetching.status}`)

  return fetching
}
