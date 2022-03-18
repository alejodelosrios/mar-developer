import { render, within, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  describe('Contact component tests', () => {
    describe('Title section', () => {
      it('should have a section title', () => {
        const section = screen.getByTestId('contact-section')
        const sectionTitle = within(section).getByTestId('section-title')
        expect(sectionTitle).toBeInTheDocument()
      })
    })
    describe('Content section', () => {
      it('should have 2 contact cards', () => {
        const section = screen.getByTestId('contact-section')
        const contactCards = within(section).getAllByRole('article')
        expect(contactCards.length).toBe(2)
      })
      it('should have an Email card', () => {
        const section = screen.getByTestId('contact-section')
        const contactCards = within(section).getAllByRole('article')
        expect(contactCards[0]).toHaveTextContent('Email')
      })
      it('should have a Whatsapp card', () => {
        const section = screen.getByTestId('contact-section')
        const contactCards = within(section).getAllByRole('article')
        expect(contactCards[1]).toHaveTextContent('Whatsapp')
      })
      describe('Contact form', () => {
        it('should have a form', () => {
          const formElement = screen.getByTestId('contact-form')
          expect(formElement).toBeInTheDocument()
        })
        it('should have a name input', () => {
          const formElement = screen.getByTestId('contact-form')
          const nameInputElement = within(formElement).getByPlaceholderText(/your full name/i)
          expect(nameInputElement).toBeInTheDocument()
        })
        it('should have an email input', () => {
          const formElement = screen.getByTestId('contact-form')
          const emailInputElement = within(formElement).getByPlaceholderText(/your email/i)
          expect(emailInputElement).toBeInTheDocument()
        })
        it('should have a message textarea', () => {
          const formElement = screen.getByTestId('contact-form')
          const messagelInputElement = within(formElement).getByPlaceholderText(/your message/i)
          expect(messagelInputElement).toBeInTheDocument()
        })
        it('should have a button', () => {
          const formElement = screen.getByTestId('contact-form')
          const buttonElement = within(formElement).getByRole('button', { name: 'Send Message' })
          expect(buttonElement).toBeInTheDocument()
        })
      })
    })
  })
})
