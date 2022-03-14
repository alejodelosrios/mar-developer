import { render, screen } from '@testing-library/react'
import { SkillsCard } from './SkillsCard'

describe('SkillsCard Component', () => {
  let component
  const level = 'Nivel de Prueba'
  beforeEach(() => {
    render(<SkillsCard title="Html" level={level} />)
  })
  it('should render SkillsCard component', () => {
    component = render(<SkillsCard title="Html" level={level} />)
    expect(component).toBeDefined()
  })
  it('should have a heading for the card title ', () => {
    expect(screen.getByRole('heading', { level: 4 })).toBeDefined()
  })
  it('should have a small to show the level', () => {
    const element = screen.getByText(/nivel de prueba/i)
    expect(element).toBeInTheDocument()
  })
})
