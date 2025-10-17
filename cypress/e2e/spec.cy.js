describe('template spec', () => {
  it('Get, types, and assert', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fakeemail@example.com')

    cy.get('.action-email').should('have.value', 'fakeemail@example.com')
  })
})