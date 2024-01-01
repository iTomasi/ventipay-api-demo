import { createHmac } from 'node:crypto'

export const isValidWebhookSignature = (secret: string, payload: string, signatureHeader: string): boolean => {
  const reduce = signatureHeader.split(',').reduce<Record<string, string>>((acc, value) => {
    const [key, value1] = value.split('=')

    acc[key] = value1

    return acc
  }, {})

  const { t, v1 } = reduce

  if (typeof t !== 'string' || typeof v1 !== 'string') return false

  console.log({ t, v1 })

  const hash = createHmac('sha256', secret).update(`${t}.${payload}`).digest('hex')

  return hash === v1
}
