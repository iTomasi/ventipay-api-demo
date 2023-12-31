import { getCurrentCart } from '@/server/getCurrentCart'
import { redirect } from 'next/navigation'

export default function Page (): JSX.Element {
  const myCart = getCurrentCart()

  if (myCart.length === 0) {
    return redirect('/')
  }

  return (
    <div>
      checkout
    </div>
  )
}
