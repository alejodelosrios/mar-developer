import React from 'react'
import { render, screen } from '@testing-library/react'
import { HeaderSocials } from './Headersocials'

describe('HeaderSocials Component', () => {
  beforeEach(() => {
    render(<HeaderSocials />)
  })

  it('should have a linkedin link', () => {
    const linkedinButton = screen.getByTestId('linkedin-button')
    expect(linkedinButton).toBeInTheDocument()
    expect(linkedinButton).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/manuel-alejandro-ramírez'
    )
    expect(linkedinButton).toHaveAttribute('target', '_blank')
  })
  it('should have a lets talk button', () => {
    const githubButton = screen.getByTestId('github-button')
    expect(githubButton).toBeInTheDocument()
    expect(githubButton).toHaveAttribute('href', 'https://github.com/alejodelosrios')
    expect(githubButton).toHaveAttribute('target', '_blank')
  })
})
