import { fireEvent, render, screen } from '@testing-library/react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Portfolio } from './Portfolio'

describe('Portfolio Component Tests', () => {
  describe('Title Section', () => {
    let component
    const props = {
      title: 'Prueba',
      subtitle: 'Subtítulo de prueba',
    }
    it('should render SectionTitle component', () => {
      render(<Portfolio />)
      component = render(<SectionTitle title={props.title} subtitle={props.subtitle} />)
      expect(component).toBeDefined()
    })
  })

  describe('Content section', () => {
    it('shouldn`t shows additional project cards', () => {
      render(<Portfolio />)
      expect(screen.queryByTestId('viewMore-container')).not.toBeInTheDocument()
    })
    it('should shows additional project cards when user clicked the button', () => {
      render(<Portfolio />)
      const buttonElement = screen.getByRole('button', { name: /view more .../i })
      fireEvent.click(buttonElement)
      expect(screen.getByTestId('viewMore-container')).toBeInTheDocument()
    })
  })
})
