type Props = {
  title: string
  subtitle: string
  link: string
  linkName: string
  logo: string
}
export const ContactCard = ({ title, subtitle, link, linkName, logo }: Props) => {
  return (
    <article className="w-full">
      <div className="flex items-center justify-start gap-4">
        <img className="w-6 h-6" src={logo} alt={`${logo}__img`} />
        <div className="flex flex-col w-3/4">
          <h4>{title}</h4>
          <h5 className="font-extralight cursor-pointer">{subtitle}</h5>
        </div>
      </div>
      <a className="text-sm text-primary" href={link} target="_blank">
        {linkName}
      </a>
    </article>
  )
}
