/// <reference types="cypress" />

describe('Home Page', () => {
  it('contains a welcome message and three blog articles', () => {
    cy.visit('/');
    cy.get('[data-cy=page-content-header]').contains('Witaj na blogu!');
    cy.get('[data-cy=post-list-item]').should('have.length', 3);
    cy.get('[data-cy=all-posts-link')
      .contains('Wszystkie artykuły')
      .and('have.attr', 'href', '/posty');
  });
});
