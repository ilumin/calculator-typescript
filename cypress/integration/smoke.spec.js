describe('Smoke Test', () => {
  it('can view home page', () => {
    cy.visit('/')
    cy.contains('Learn React')
  })
})
