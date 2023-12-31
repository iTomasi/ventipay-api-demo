interface SectionProps extends React.PropsWithChildren {
  title: string
  classNameChildren?: string
}

export default function Section ({
  title,
  classNameChildren,
  children
}: SectionProps): JSX.Element {
  return (
    <section>
      <h4 className='font-medium text-2xl mb-4'>{title}</h4>

      <div className={classNameChildren}>
        {children}
      </div>
    </section>
  )
}
