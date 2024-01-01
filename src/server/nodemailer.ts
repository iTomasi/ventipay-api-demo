import { createTransport } from 'nodemailer'
import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME } from './envs'

export const transport = createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD
  }
})
