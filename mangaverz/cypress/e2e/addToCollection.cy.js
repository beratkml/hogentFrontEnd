describe('add to collection test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should click the add to collection button',()=>{
    cy.visit('http://localhost:3000/manga');
    cy.get('[data-cy=add-button]').click();
  });

  it('should add test collection',()=>{
    cy.visit('http://localhost:3000/manga');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=chapter_input]').type(5);
    cy.get('[data-cy=start_date-button]').type('2022-12-13');
    cy.get('[data-cy=end_date-button]').type('2022-12-25');
    cy.get('[data-cy=status-button]').select('paused');
    cy.get('[data-cy=submit-button]').click();
  })
  it('should click the closse button',()=>{
    cy.visit('http://localhost:3000/manga');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=close-button]').click();
  });
});