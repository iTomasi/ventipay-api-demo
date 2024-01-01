// import { VENTIPAY_WEBHOOK_SIGNATURE } from '@/server/envs'
import { NextResponse } from 'next/server'

export const POST = async (req: Request): Promise<Response> => {
  const body = await req.json()

  // const ventiSignature = req.headers.get('venti-signature')

  // console.log(ventiSignature)

  if (body.type !== 'checkout.paid') return NextResponse.json({ success: true })

  console.log(body)

  return NextResponse.json({ success: true })
}
