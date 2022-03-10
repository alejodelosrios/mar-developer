import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App component', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)
	})

	it('renders component title', () => {
		expect(screen.getByText(/Header/i)).toBeInTheDocument()
	})
})
