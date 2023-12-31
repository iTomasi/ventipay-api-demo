import { getCurrentCart } from '@/server/getCurrentCart'
import { redirect } from 'next/navigation'
import { Items, Form } from '@/components/screens/checkout'

export default function Page (): JSX.Element {
  const myCart = getCurrentCart()

  if (myCart.length === 0) {
    return redirect('/')
  }

  return (
    <div className='flex'>
      <div className='w-[60%] pr-8 border-r border-divider'>
        <Form />
      </div>
      <div className='w-[40%] pl-8'>
        <Items />
      </div>
    </div>
  )
}
