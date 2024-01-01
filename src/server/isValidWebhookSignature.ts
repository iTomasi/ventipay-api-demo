import { createHmac } from 'node:crypto'

export const isValidWebhookSignature = (secret: string, payload: string, signature: string): boolean => {
  const hash = createHmac('sha256', secret).update(payload).digest('hex')

  return hash === signature
}
