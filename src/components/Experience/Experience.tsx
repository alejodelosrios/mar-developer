import { SectionTitle } from '../SectionTitle/SectionTitle'
import { MainCard } from './MainCard/MainCard'
import { SkillsCard } from './SkillsCard/SkillsCard'
import { RiShieldCheckLine } from 'react-icons/ri'
import { frontendSkills, backendSkills } from '../../utils/skills'

export const Experience = () => {
  return (
    <section id="experience" className="mx-4 mt-32 md:mx-0">
      <SectionTitle title="Experience" subtitle="What Skills I Have" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <MainCard data-testid="frontendcardid" title="Frontend Development">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {frontendSkills &&
              frontendSkills.map((skill) => (
                <SkillsCard key={skill.id} title={skill.title} level={skill.level}>
                  <RiShieldCheckLine className="w-8 h-8" />
                </SkillsCard>
              ))}
          </div>
        </MainCard>
        <MainCard data-testid="backendcardid" title="Backend Development">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {backendSkills &&
              backendSkills.map((skill) => (
                <SkillsCard key={skill.id} title={skill.title} level={skill.level}>
                  <RiShieldCheckLine className="w-8 h-8" />
                </SkillsCard>
              ))}
          </div>
        </MainCard>
      </div>
    </section>
  )
}
