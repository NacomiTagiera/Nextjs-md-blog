/// <reference types="cypress" />

describe('Site navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates around the website', () => {
    cy.get('[data-cy=navbar-link-posty]').click();
    cy.url().should('include', '/posty');
    cy.get('[data-cy=page-content-header]').contains('Wszystkie wpisy');
    cy.get('[data-cy=navbar-link-posty]').should('have.attr', 'aria-current', 'page');

    cy.get('[data-cy=navbar-link-kontakt]').click();
    cy.url().should('include', '/kontakt');
    cy.get('[data-cy=contact-form-header]').contains('Napisz wiadomość');
    cy.get('[data-cy=navbar-link-kontakt]').should('have.attr', 'aria-current', 'page');
  });

  it('footer social media links have proper attributes', () => {
    cy.get('[data-cy=footer-social-link]').each(($el) => {
      expect($el).to.have.attr('target', '_blank').and.have.attr('rel', 'noopener noreferrer');
    });
  });
});
``;
