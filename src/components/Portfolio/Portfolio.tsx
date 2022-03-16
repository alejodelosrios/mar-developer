import { SectionTitle } from '../SectionTitle/SectionTitle'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { projects } from '../../utils/projects'
import { useState } from 'react'

export const Portfolio = () => {
  const [viewMore, setViewMore] = useState<boolean>(false)
  return (
    <section className="mx-4 mt-32 md:mx-0 flex flex-col items-center">
      <SectionTitle title="Portfolio" subtitle="My Recent Work" />
      <div className="w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-content-center">
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
      {!viewMore && (
        <button onClick={() => setViewMore(true)} className="btn my-6">
          View more ...
        </button>
      )}
      {viewMore && (
        <div
          data-testid="viewMore-container"
          className="mt-4 w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-content-center"
        >
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
      )}
    </section>
  )
}
