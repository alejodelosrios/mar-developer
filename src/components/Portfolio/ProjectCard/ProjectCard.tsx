type Props = {
  github?: string
  web?: string
  image: string
  title: string
  children?: JSX.Element
}

export const ProjectCard = ({ github, web, image, title, children }: Props) => {
  return (
    <article className="relative">
      <img className="" src={image} alt={`img ${title}`} />
      <small>Tags</small>
      <h3>{title}</h3>
      {children}
      {github && (
        <a
          className="absolute bottom-[48px] left-0 bg-primary text-cgray px-2 py-1 text-sm cursor-pointer"
          href={github}
        >
          GitHub
        </a>
      )}
      {web && (
        <a
          className="absolute bottom-[48px] right-0 bg-primary text-cgray px-2 py-1 text-sm cursor-pointer"
          href={web}
        >
          Live
        </a>
      )}
    </article>
  )
}
