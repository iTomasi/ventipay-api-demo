import CardProduct from '@/components/ui/CardProduct'
import { products } from '@/server/db'

export default function Page (): JSX.Element {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        products.map((product) => (
          <CardProduct
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))
      }
    </div>
  )
}
