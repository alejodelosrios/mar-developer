import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'

describe('ProjectCard Component', () => {
  let component
  const github = 'Nivel de Prueba'
  const web = 'Nivel de Prueba'
  const image = ''
  const title = 'Proyecto de prueba'
  beforeEach(() => {
    render(<ProjectCard github={github} web={web} image={image} title={title} />)
  })

  it('should render ProjectCard component', () => {
    component = render(<ProjectCard github={github} web={web} image={image} title={title} />)
    expect(component).toBeDefined()
  })
  describe('Image section', () => {
    it('should have an image', () => {
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
    it('should have an alt attribute in the image tag', () => {
      expect(screen.getByRole('img')).toHaveAttribute('alt', `img ${title}`)
    })
  })
  describe('Content section', () => {
    it('should have a heading for the card title ', () => {
      expect(screen.getByRole('heading', { level: 3 })).toBeDefined()
    })
    it('should have 2 links', () => {
      const linkElements = screen.getAllByRole('link')
      expect(linkElements.length).toBe(2)
    })
    it('should have a Github link', () => {
      expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    })
    it('should have a Web link', () => {
      expect(screen.getByRole('link', { name: 'Live' })).toBeInTheDocument()
    })
  })
})
