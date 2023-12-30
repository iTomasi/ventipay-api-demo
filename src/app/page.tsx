import CardProduct from '@/components/ui/CardProduct'

export default function Page (): JSX.Element {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <CardProduct />
    </div>
  )
}
