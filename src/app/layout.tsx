import type { Metadata } from 'next'
import Header from '@/components/Header'
import { MyCartProvider } from '@/context'
import 'tailwindcss/tailwind.css'

export default function Layout ({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <html lang='es'>
      <body>
        <Header />

        <main className='max-w-screen-xl px-6 mx-auto py-8'>
          <MyCartProvider>
            {children}
          </MyCartProvider>
        </main>
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
