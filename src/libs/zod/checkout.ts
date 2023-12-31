import { z } from 'zod'

export const zodCheckout = z.object({
  fullName: z.string().min(1, 'El nombre es requerido').min(3, 'Minimo 3 caracteres'),
  email: z.string().min(1, 'El correo es requerido').email('El correo no es valido')
})
