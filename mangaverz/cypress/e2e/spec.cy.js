describe("mijn eerste test", () => {
  beforeEach(() => {
    cy.login();
  });
  it("draait de applicatie", () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=discover]').click() // 👈
  });
});