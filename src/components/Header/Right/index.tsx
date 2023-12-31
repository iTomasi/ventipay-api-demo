import { NavbarContent } from '@nextui-org/react'
import Cart from './Cart'

export default function Right (): JSX.Element {
  return (
    <NavbarContent justify='end'>
      <Cart />
    </NavbarContent>
  )
}
