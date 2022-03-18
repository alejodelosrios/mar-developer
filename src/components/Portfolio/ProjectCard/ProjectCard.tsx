type Props = {
  github?: string
  web?: string
  image: string
  title: string
  children?: JSX.Element
}

export const ProjectCard = ({ github, web, image, title, children }: Props) => {
  return (
    <article
      id="project-card"
      className="relative w-[360px] lg:w-[325.33px] xl:w-[410.66px] h-[260px] flex flex-col justify-center items-center cursor-pointer bg-secondary dark:bg-transparent dark:border dark:border-lightgray  hover:border-transparent rounded-t-xl transition-all duration-1000"
    >
      <img
        className="absolute left-0 top-0 w-full h-full opacity-0 hover:opacity-100 transition duration-[2000ms] rounded-t-xl"
        src={image}
        alt={`img ${title}`}
      />
      <small className="transition opacity-100  hover:opacity-0 duration-[1500ms] ">Tags</small>
      <h3 className="transition opacity-100  hover:opacity-0 duration-1000 text-2xl">{title}</h3>
      {children}
      {github && (
        <a
          className="absolute bottom-0 left-0 bg-primary text-cgray px-2 py-1 text-sm cursor-pointer"
          href={github}
        >
          GitHub
        </a>
      )}
      {web && (
        <a
          className="absolute bottom-0 right-0 bg-primary text-cgray px-2 py-1 text-sm cursor-pointer"
          href={web}
        >
          Live
        </a>
      )}
    </article>
  )
}
