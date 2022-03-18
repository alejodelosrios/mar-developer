import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'
import Email from '../../../assets/icons/mail-outline.svg'

describe('ContactCard Component', () => {
  let title = 'Test card'
  let subtitle = 'Test subtitle'
  let link = 'http://www.prueba.com'
  let linkName = 'Email'
  beforeEach(() => {
    render(
      <ContactCard title={title} subtitle={subtitle} link={link} linkName={linkName} logo={Email} />
    )
  })
  it('should be defined', () => {
    let view = render(
      <ContactCard title={title} subtitle={subtitle} link={link} linkName={linkName} logo={Email} />
    )
    expect(view).toBeDefined()
  })
  it('should have a heading for the card title ', () => {
    const headingElement = screen.getByRole('heading', { level: 4 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent(title)
  })
  it('should have a heading for the card subtitle ', () => {
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(subtitle)
  })
  it('should have a link', () => {
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', link)
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveTextContent(linkName)
  })
})
