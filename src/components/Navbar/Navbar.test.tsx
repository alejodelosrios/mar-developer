import {render, screen, fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {Navbar} from './Navbar'

describe('Cta Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

  })
  describe('Link elements are in the document', () => {
    it('should have a home link', () => {
      const linkElement = screen.getByTestId('homeId')
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', '#home')
    })
    it('should have a about link', () => {
      const divElement = screen.getByTestId('aboutId')
      expect(divElement).toBeInTheDocument()
    })
    it('should have a portfolio link', () => {
      const linkElement = screen.getByTestId('portfolioId')
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', '#portfolio')
    })
    it('should have a experience link', () => {
      const linkElement = screen.getByTestId('experienceId')
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', '#experience')
    })
    it('should have a contact link', () => {
      const linkElement = screen.getByTestId('contactId')
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', '#contact')
    })
  })

  describe('Links are Highlighted when user clicks on them', () => {
    it('should highlight the home link when user clicks', () => {
      const linkElement = screen.getByTestId('homeId')
      fireEvent.click(linkElement)
      expect(linkElement).toHaveClass('active')
    })
    it('should highlight the about link when user clicks', () => {
      const linkElement = screen.getByTestId('aboutId')
      fireEvent.click(linkElement)
      expect(linkElement).toHaveClass('active')
    })
    it('should highlight the porfolio link when user clicks', () => {
      const linkElement = screen.getByTestId('portfolioId')
      fireEvent.click(linkElement)
      expect(linkElement).toHaveClass('active')
    })
    it('should highlight the experience link when user clicks', () => {
      const linkElement = screen.getByTestId('experienceId')
      fireEvent.click(linkElement)
      expect(linkElement).toHaveClass('active')
    })
    it('should highlight the contact link when user clicks', () => {
      const linkElement = screen.getByTestId('contactId')
      fireEvent.click(linkElement)
      expect(linkElement).toHaveClass('active')
    })
  })
})
