type Props = {
  title: string
  children?: JSX.Element
}

export const MainCard = ({ title, children }: Props) => {
  return (
    <article
      className="group bg-secondary bg-opacity-80 px-12 py-8 text-dark rounded-[2rem] border border-transparent text-center hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-500"
      data-testid="experienceCardId"
    >
      <h5 className="text-xl group-hover:text-primary mb-8">{title}</h5>
      {children}
    </article>
  )
}
