import { Html, Head, Body, Tailwind, Container, Heading, Text, Section, Img } from '@react-email/components'
import { CLIENT_URL } from '@/server/envs'

interface IItem {
  unit_price: number
  name: string
  quantity: number
}

interface PurchaseProps {
  transactionId: string
  fullName: string
  items: IItem[]
}

export default function Purchase ({
  transactionId,
  fullName,
  items
}: PurchaseProps): JSX.Element {
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body>
          <Container className='border border-solid border-gray-300 rounded-md p-10'>
            <Section className='text-center'>
              <Img className='mx-auto' src={`${CLIENT_URL}/check-circle.png`} alt='Check circle' width={70} height={70} />
              <Heading>Gracias por tu compra!</Heading>
              <Text className='text-lg'>Id de la transacción: <strong>{transactionId}</strong></Text>
            </Section>

            <Section>
              <Text className='text-base'>Hola {fullName}, aqui le dejamos los detalles de los productos que adquirio:</Text>
              <ul>
                {
                  items.map((item, key) => (
                    <li key={key}>
                      <Text className='text-base'>
                        {item.name} ({item.quantity}) - ${(item.unit_price * item.quantity).toLocaleString('es-CL')}
                      </Text>
                    </li>
                  ))
                }
              </ul>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
