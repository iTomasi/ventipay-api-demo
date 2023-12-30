import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Right from './Right'

export default function Header (): JSX.Element {
  return (
    <Navbar maxWidth='xl'>
      <NavbarBrand>
        Ventipay - Demo
      </NavbarBrand>
      <Right />
    </Navbar>
  )
}