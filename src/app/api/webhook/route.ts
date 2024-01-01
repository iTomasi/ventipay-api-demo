import { VENTIPAY_WEBHOOK_SIGNATURE } from '@/server/envs'
import { NextResponse } from 'next/server'
// import { transport } from '@/server/nodemailer'
// import { EmailPurchase } from '@/components/emails'
// import { render } from '@react-email/render'
import { isValidWebhookSignature } from '@/server/isValidWebhookSignature'

export const POST = async (req: Request): Promise<Response> => {
  const ventiSignature = req.headers.get('venti-signature')

  if (ventiSignature === null || ventiSignature === '') {
    return NextResponse.json({ message: 'Nope' }, { status: 401 })
  }

  // TODO: signature verification

  const json = await req.json()

  const a = isValidWebhookSignature(VENTIPAY_WEBHOOK_SIGNATURE, JSON.stringify(json), ventiSignature)

  console.log({ a })

  if (json.type !== 'checkout.paid') return NextResponse.json({ success: true })

  console.log(json)

  // const { data } = json

  // const id = data.id
  // const items = data.items
  // const metadata = data.metadata

  try {
    /* await transport.sendMail({
      to: metadata.email,
      from: 'Demo <pagos@demo.cl>',
      subject: 'Venti Demo - Compra',
      html: render(EmailPurchase({ transactionId: id, fullName: metadata.fullName, items }))
    }) */

    return NextResponse.json({ success: true })
  } catch (e) {
    console.log(e)
    console.log('/api/webhook - POST error')
    return NextResponse.json({ message: e?.message ?? 'Server Internal Error' }, { status: 500 })
  }
}
