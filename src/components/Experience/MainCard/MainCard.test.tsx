import { render, screen } from '@testing-library/react'
import { MainCard } from './MainCard'

describe('MainCard Component', () => {
  let component
  it('should render SectionTitle component', () => {
    component = render(<MainCard title="Prueba" />)
    expect(component).toBeDefined()
  })
  it('should have a heading for the card title ', () => {
    render(<MainCard title="Prueba" />)
    expect(screen.getByRole('heading', { level: 5 })).toBeDefined()
  })
})
