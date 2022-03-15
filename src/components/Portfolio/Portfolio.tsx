import { SectionTitle } from '../SectionTitle/SectionTitle'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { projects } from '../../utils/projects'

export const Portfolio = () => {
  return (
    <section className="mx-4 mt-32 md:mx-0">
      <SectionTitle title="Portfolio" subtitle="My Recent Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              github={project.github}
              web={project.web}
            ></ProjectCard>
          ))}
      </div>
    </section>
  )
}
