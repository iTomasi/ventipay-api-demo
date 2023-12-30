import 'tailwindcss/tailwind.css'

export default function Layout ({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <html lang='es'>
      <body>
        {children}
      </body>
    </html>
  )
}
