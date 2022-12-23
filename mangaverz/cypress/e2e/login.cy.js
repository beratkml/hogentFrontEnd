describe('login', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should successfully log into the app', () => {
    cy.get('h2').should('exist');
  });

});