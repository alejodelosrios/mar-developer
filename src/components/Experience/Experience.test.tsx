import { render, screen, within } from '@testing-library/react'
import { Experience } from './Experience'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { SkillsCard } from './SkillsCard/SkillsCard'

describe('Experience Component', () => {
  beforeEach(() => {
    render(<Experience />)
  })
  describe('Section title', () => {
    let component
    const title = 'Prueba'
    const subtitle = 'Subtítulo de prueba'
    it('should render SectionTitle component', () => {
      component = render(<SectionTitle title={title} subtitle={subtitle} />)
      expect(component).toBeDefined()
    })
  })

  describe('Cards section', () => {
    let component
    const title = 'Prueba'
    const level = '2+ years'
    it('should have 2 cards', () => {
      const cardElements = screen.getAllByRole('article')
      expect(cardElements.length).toBe(2)
    })
    it('should render SkillsCard component', () => {
      component = render(<SkillsCard title={title} level={level} />)
      expect(component).toBeDefined()
    })
  })
})
