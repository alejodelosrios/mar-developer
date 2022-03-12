import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta Component', () => {
  beforeEach(() => {
    render(<Cta />)
  })

  it('should have a download cv button', () => {
    const downloadButton = screen.getByText(/download cv/i)
    expect(downloadButton).toBeInTheDocument()
    expect(downloadButton).toHaveAttribute('href', 'cv.pdf')
    expect(downloadButton).toHaveAttribute('download')
  })
  it('should have a lets talk button', () => {
    const letsTalkButton = screen.getByText(/let's talk/i)
    expect(letsTalkButton).toBeInTheDocument()
    expect(letsTalkButton).toHaveAttribute('href', '#contact')
  })
})
