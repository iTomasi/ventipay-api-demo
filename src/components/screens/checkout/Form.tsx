'use client'
import { Input, Button } from '@nextui-org/react'
import Section from '@/components/ui/Section'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodCheckout } from '@/libs/zod'
import { FetchCreateOrder } from '@/services/api'

export default function Form (): JSX.Element {
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted, isSubmitting } } = useForm({
    resolver: zodResolver(zodCheckout),
    mode: 'onTouched'
  })

  const handleOnSubmit: SubmitHandler<any> = async (values) => {
    try {
      const url = await FetchCreateOrder(values)

      location.replace(url)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(handleOnSubmit)}
      className='flex flex-col gap-8'
    >
      <Section title='Datos personales' classNameChildren='flex flex-col gap-6'>
        <Input
          {...register('fullName')}
          labelPlacement='outside'
          label='Nombre completo'
          placeholder='Ej. Tomás Duclos'
          isInvalid={Boolean(errors.fullName?.message)}
          errorMessage={errors.fullName?.message?.toString()}
          isDisabled={isSubmitting}
        />

        <Input
          {...register('email')}
          labelPlacement='outside'
          label='Correo electrónico'
          placeholder='Ej. tu@email.com'
          isInvalid={Boolean(errors.email?.message)}
          errorMessage={errors.email?.message?.toString()}
          isDisabled={isSubmitting}
        />
      </Section>

      <Button
        type='submit'
        color='primary'
        size='lg'
        isDisabled={isSubmitted && !isValid}
        isLoading={isSubmitting}
      >
        Pagar ahora
      </Button>
    </form>
  )
}
