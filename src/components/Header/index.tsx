import { Navbar, NavbarBrand } from '@nextui-org/react'
import Right from './Right'
import Link from 'next/link'

export default function Header (): JSX.Element {
  return (
    <Navbar maxWidth='xl'>
      <NavbarBrand>
        <Link href='/'>
          Ventipay - Demo
        </Link>
      </NavbarBrand>
      <Right />
    </Navbar>
  )
}
