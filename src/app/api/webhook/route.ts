// import { VENTIPAY_WEBHOOK_SIGNATURE } from '@/server/envs'
import { NextResponse } from 'next/server'
import { transport } from '@/server/nodemailer'
import { EmailPurchase } from '@/components/emails'
import { render } from '@react-email/render'

export const POST = async (req: Request): Promise<Response> => {
  const json = await req.json()

  // const ventiSignature = req.headers.get('venti-signature')

  // console.log(ventiSignature)

  if (json.type !== 'checkout.paid') return NextResponse.json({ success: true })

  const { data } = json

  const id = data.id
  const email = data.customer.email
  const items = data.items

  try {
    await transport.sendMail({
      to: email,
      from: 'Demo <pagos@demo.cl>',
      subject: 'Venti Demo - Compra',
      html: render(EmailPurchase({ transactionId: id, items }))
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.log(e)
    console.log('/api/webhook - POST error')
    return NextResponse.json({ message: e?.message ?? 'Server Internal Error' }, { status: 500 })
  }
}
