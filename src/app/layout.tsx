import type { Metadata } from 'next'
import Header from '@/components/Header'
import { MyCartProvider } from '@/context'
import { getCurrentCart } from '@/server/getCurrentCart'
import 'tailwindcss/tailwind.css'

export default function Layout ({
  children
}: React.PropsWithChildren): JSX.Element {
  const myCart = getCurrentCart()

  return (
    <html lang='es'>
      <body>
        <MyCartProvider initialCart={myCart}>
          <Header />

          <main className='max-w-screen-xl px-6 mx-auto py-8'>
            {children}
          </main>
        </MyCartProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: 'VentiPay - Demo'
}
