import { ListProducts } from '@/components/screens/home'
import { products } from '@/server/db'

export default function Page (): JSX.Element {
  return (
    <ListProducts data={products} />
  )
}
