describe('Testing the Webpage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should test the title', () => {
    cy.get('title')
      .should('be.visible')
      .and('contain.text', 'Welcome to Our Store');
  });

  it('should test the links', () => {
    cy.contains('Home').click();
    cy.url().should('#');
  });

  it('should test the photos', () => {
    cy.get('/images/all-in-fit.avif').should('be.visible');
  });

  it('should test the text content', () => {
    cy.contains('Fancy pants').should('be.visible');
  });
});
