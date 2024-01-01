export const VENTIPAY_API_KEY_SECRET = process.env.VENTIPAY_API_KEY_SECRET ?? ''
export const VENTIPAY_WEBHOOK_SIGNATURE = process.env.VENTIPAY_WEBHOOK_SIGNATURE ?? ''
export const CLIENT_URL = process.env.CLIENT_URL ?? 'http://localhost:3000'
export const SMTP_HOST = process.env.SMTP_HOST ?? ''
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const SMTP_PORT = Number(process.env.SMTP_PORT) || 543
export const SMTP_USERNAME = process.env.SMTP_USERNAME ?? ''
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD ?? ''
