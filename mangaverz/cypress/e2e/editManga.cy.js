describe('edit manga test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should click the add button',()=>{
    cy.visit('http://localhost:3000/admin-manga');
    cy.get('[data-cy=add-button]').click();
  });

  it('should edit test manga',()=>{
    cy.visit('http://localhost:3000/admin-manga');
    cy.get('[data-cy=edit-button]').click();
    cy.visit('http://localhost:3000/manga/edit/f1bdf45e-1b1c-11ec-9621-0242ac130002');
    cy.get('[data-cy=name-button]').type('Blue lock');
    cy.get('[data-cy=chapters-button]').type(80);
    cy.get('[data-cy=author-button]').type('Berat');
    cy.get('[data-cy=date-button]').type('2021-11-01');
    cy.get('[data-cy=desc-button]').type('nqjksdffqklfhsmfhdsmqhfdmlfdslmf');
    cy.get('[data-cy=genre-button]').select('shonen');
    cy.get('[data-cy=submit-button]').click();
  })

  it('should not edit value due to invalid date',()=>{
    cy.visit('http://localhost:3000/admin-manga');
    cy.get('[data-cy=edit-button]').click();
    cy.visit('http://localhost:3000/manga/edit/f1bdf45e-1b1c-11ec-9621-0242ac130002');
    cy.get('[data-cy=name-button]').type('Whoopty');
    cy.get('[data-cy=chapters-button]').type(80);
    cy.get('[data-cy=author-button]').type('Berat');
    cy.get('[data-cy=date-button]').type('2024-11-01');
    cy.get('[data-cy=desc-button]').type('nqjksdffqklfhsmfhdsmqhfdmlfdslmf');
    cy.get('[data-cy=genre-button]').select('shonen');
    cy.get('[data-cy=submit-button]').click();
  })

  it('should click the delete button',()=>{
    cy.visit('http://localhost:3000/admin-manga');
    cy.get('[data-cy=delete-button]').click();
  });
});