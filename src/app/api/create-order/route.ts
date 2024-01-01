import { NextResponse } from 'next/server'
import { zodCheckout } from '@/libs/zod'
import { FetchVentiPay } from '@/server/FetchBase'
import { getCurrentCart } from '@/server/getCurrentCart'
import { CLIENT_URL } from '@/server/envs'

export const POST = async (req: Request): Promise<Response> => {
  const json = await req.json()

  const safeParse = zodCheckout.safeParse(json)

  if (!safeParse.success) {
    return NextResponse.json({ message: safeParse.error.errors[0].message }, { status: 400 })
  }

  const customerCart = getCurrentCart()

  if (customerCart.length === 0) return NextResponse.json({ message: 'No tienes nada en tu carrito :(' }, { status: 400 })

  const mapCart = customerCart.map((product) => ({
    unit_price: product.price,
    quantity: product.quantity,
    name: product.name
  }))

  // const { fullName, email } = safeParse.data

  const body = {
    currency: 'clp',
    items: mapCart,
    cancel_url: `${CLIENT_URL}/checkout`,
    cancel_url_method: 'get',
    success_url: `${CLIENT_URL}/checkout/success`,
    success_url_method: 'get'
  }

  try {
    const fetching = await FetchVentiPay(
      '/checkouts',
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await fetching.json()

    return NextResponse.json({ url: data.url })
  } catch (e) {
    console.log(e)
    console.log('/api/create-order - POST error')
    return NextResponse.json({ message: e?.message ?? 'Server Internal Error' }, { status: 500 })
  }
}
