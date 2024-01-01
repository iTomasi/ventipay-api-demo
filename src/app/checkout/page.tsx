import { getCurrentCart } from '@/server/getCurrentCart'
import { redirect } from 'next/navigation'
import { Items, Form } from '@/components/screens/checkout'

export default function Page (): JSX.Element {
  const myCart = getCurrentCart()

  if (myCart.length === 0) {
    return redirect('/')
  }

  return (
    <div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row'>
      <div className='md:w-[60%] md:pr-8 md:border-r md:border-divider'>
        <Form />
      </div>
      <div className='md:w-[40%] md:pl-8'>
        <Items />
      </div>
    </div>
  )
}
