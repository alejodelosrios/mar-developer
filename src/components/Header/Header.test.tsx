import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should have a h1 tag for the app title', () => {
    expect(screen.getByTestId('h1-title')).toBeInTheDocument()
  })
  it('should have a h5 tag for subtitle', () => {
    expect(screen.getByText(/hello, i'm/i)).toBeInTheDocument()
  })
  it('should have a h5 tag for subtitle2', () => {
    expect(screen.getByText(/fullstack developer/i)).toBeInTheDocument()
  })
  it('should have cta for downloading the CV', () => {
    expect(screen.getByText(/download cv/i)).toBeInTheDocument()
  })
  it('should have cta for contacting', () => {
    expect(screen.getByText(/let's talk/i)).toBeInTheDocument()
  })
  it('should have profile image', () => {
    expect(screen.getByTestId('profile-img')).toBeInTheDocument()
  })
  it('should have a link to scroll down the page', () => {
    const scrollDownAnchor = screen.getByText(/scroll down/i)
    expect(scrollDownAnchor).toBeInTheDocument()
    expect(scrollDownAnchor).toHaveAttribute('href', '#contact')
  })
})
