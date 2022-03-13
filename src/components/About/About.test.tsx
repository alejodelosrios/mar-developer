import { render, screen, within } from '@testing-library/react'
import { About } from './About'

describe('About Component', () => {
  beforeEach(() => {
    render(<About />)
  })
  describe('Section title', () => {
    it('should have a H2', () => {
      const headingElement = screen.getByRole('heading', { level: 2 })
      expect(headingElement).toBeInTheDocument()
      expect(headingElement.textContent).toBe('About')
    })
    it('should have a subtitle', () => {
      const spanElement = screen.getByTestId('spanSubtitleId')
      expect(spanElement).toBeInTheDocument()
      expect(spanElement.textContent).toBe('Get To Know')
    })
  })

  describe('Body section', () => {
    describe('Image section', () => {
      it('should have an image', () => {
        expect(screen.getByTestId('about-img')).toBeInTheDocument()
      })
      it('should have an alt attribute in the image tag', () => {
        expect(screen.getByTestId('about-img')).toHaveAttribute('alt', 'about-img')
      })
    })
    describe('Cards section', () => {
      it('should have 3 cards', () => {
        const cardElements = screen.getAllByRole('article')
        expect(cardElements.length).toBe(3)
      })
      it('should have a paragraph', () => {
        const paragraphElement = screen.getByTestId('paragraphId')
        expect(paragraphElement).toBeInTheDocument()
      })
      it('should have a cta button', () => {
        expect(screen.getByText(/let's talk/i)).toBeInTheDocument()
        expect(screen.getByText(/let's talk/i)).toHaveAttribute('href', '#contact')
      })
      describe('Experience card', () => {
        it('should have an icon', () => {
          const experienceCardElement = screen.getByTestId('experienceCardId')
          const iconElement = within(experienceCardElement).getByTestId('cardIconId')
          expect(iconElement).toBeInTheDocument()
        })
        it('should have a card title', () => {
          const experienceCardElement = screen.getByTestId('experienceCardId')
          const headingElement = within(experienceCardElement).getByRole('heading', { level: 5 })
          expect(headingElement).toBeInTheDocument()
          expect(headingElement.textContent).toBe('Experience')
        })
        it('should have a small description', () => {
          const experienceCardElement = screen.getByTestId('experienceCardId')
          const smallElement = within(experienceCardElement).getByTestId('cardSmallId')
          expect(smallElement).toBeInTheDocument()
        })
      })
      describe('Clients card', () => {
        it('should have an icon', () => {
          const clientsCardElement = screen.getByTestId('clientsCardId')
          const iconElement = within(clientsCardElement).getByTestId('cardIconId')
          expect(iconElement).toBeInTheDocument()
        })
        it('should have a card title', () => {
          const clientsCardElement = screen.getByTestId('clientsCardId')
          const headingElement = within(clientsCardElement).getByRole('heading', { level: 5 })
          expect(headingElement).toBeInTheDocument()
          expect(headingElement.textContent).toBe('Clients')
        })
        it('should have a small description', () => {
          const clientsCardElement = screen.getByTestId('clientsCardId')
          const smallElement = within(clientsCardElement).getByTestId('cardSmallId')
          expect(smallElement).toBeInTheDocument()
        })
      })
      describe('Projects card', () => {
        it('should have an icon', () => {
          const projectsCardElement = screen.getByTestId('projectsCardId')
          const iconElement = within(projectsCardElement).getByTestId('cardIconId')
          expect(iconElement).toBeInTheDocument()
        })
        it('should have a card title', () => {
          const projectsCardElement = screen.getByTestId('projectsCardId')
          const headingElement = within(projectsCardElement).getByRole('heading', { level: 5 })
          expect(headingElement).toBeInTheDocument()
          expect(headingElement.textContent).toBe('Projects')
        })
        it('should have a small description', () => {
          const projectsCardElement = screen.getByTestId('projectsCardId')
          const smallElement = within(projectsCardElement).getByTestId('cardSmallId')
          expect(smallElement).toBeInTheDocument()
        })
      })
    })
  })
})
