describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/')
    cy.contains('Header')
    cy.contains('About')
    cy.contains('Experience')
    cy.contains('Portfolio')
    cy.contains('Testimonials')
  })
})
