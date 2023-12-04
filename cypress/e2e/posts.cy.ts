/// <reference types="cypress" />

describe('All posts page', () => {
  beforeEach(() => {
    cy.visit('/posty');
  });

  it('renders a list with all posts', () => {
    cy.get('[data-cy=page-content-header]').contains('Wszystkie wpisy');
    cy.title().should('eq', 'Wszystkie wpisy | Kocham Gry');
    cy.get('[data-cy=post-list-item]').should('have.length', 11);
    cy.get('[data-cy=category-link]').should('have.length', 6);
    cy.get('[data-cy=category-link]')
      .contains('Wszystkie')
      .should('have.attr', 'aria-current', 'page');
  });

  it('navigates to a certain category subpage', () => {
    cy.get('[data-cy=category-link]').contains('RPG').click();
    cy.url().should('include', 'rpg');
    cy.title().should('eq', 'RPG | Kocham Gry');
    cy.get('[data-cy=category-link]').contains('RPG').should('have.attr', 'aria-current', 'page');
    cy.get('[data-cy=post-list-item]').should('have.length', 2);
  });

  it('sorts posts by date and in alpabetical order', () => {
    cy.get('[data-cy=sort-select]').select('najstarsze');
    cy.get('[data-cy=post-list-item]')
      .first()
      .contains(/Hearthstone/);
    cy.get('[data-cy=post-list-item]')
      .last()
      .contains(/God of War/);
    cy.url().should('include', 'order=najstarsze');

    cy.get('[data-cy=sort-select]').select('najnowsze');
    cy.get('[data-cy=post-list-item]')
      .first()
      .contains(/God of War/);
    cy.get('[data-cy=post-list-item]')
      .last()
      .contains(/Hearthstone/);
    cy.url().should('include', 'order=najnowsze');

    cy.get('[data-cy=sort-select]').select('alfabetycznie');
    cy.get('[data-cy=post-list-item]')
      .first()
      .contains(/Call of Duty/);
    cy.get('[data-cy=post-list-item]')
      .last()
      .contains(/Wiedźmin/);
    cy.url().should('include', 'order=alfabetycznie');
  });

  it('filters posts by title', () => {
    cy.get('[data-cy=search-input]').type('gwint');
    cy.get('[data-cy=post-list-item]').should('have.length', 1);
    cy.url().should('include', 'query=gwint');
    cy.get('[data-cy=search-input]').clear();

    cy.get('[data-cy=search-input]').type('go');
    cy.get('[data-cy=post-list-item]').should('have.length', 3);
    cy.url().should('include', 'query=go');
    cy.get('[data-cy=search-input]').clear();

    cy.get('[data-cy=search-input]').type('xyz');
    cy.get('[data-cy=post-list-item]').should('have.length', 0);
    cy.contains(/nie znaleziono/);
    cy.url().should('include', 'query=xyz');

    cy.get('[data-cy=search-input]').clear();
    cy.get('[data-cy=post-list-item]').should('have.length', 11);
    cy.url().should('not.include', 'query=');
  });

  it('navigates to a certain blog post page', () => {
    cy.get('[data-cy=post-list-item]').contains('Gwint').click();
    cy.url().should('include', 'gwint');
    cy.title().should('eq', 'Gwint | Kocham Gry');
    cy.get('[data-cy=blog-post-header]').contains('Gwint');
  });
});
