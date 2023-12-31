import { Input, Button } from '@nextui-org/react'
import Section from '@/components/ui/Section'

export default function Form (): JSX.Element {
  return (
    <form className='flex flex-col gap-8'>
      <Section title='Datos personales' classNameChildren='flex flex-col gap-6'>
        <Input
          labelPlacement='outside'
          label='Nombre completo'
          placeholder='Ej. Tomás Duclos'
        />

        <Input
          labelPlacement='outside'
          label='Correo electrónico'
          placeholder='Ej. tu@email.com'
        />
      </Section>

      <Button type='submit' color='primary' size='lg'>Pagar ahora</Button>
    </form>
  )
}
