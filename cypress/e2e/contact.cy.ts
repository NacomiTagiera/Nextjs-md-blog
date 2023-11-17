/// <reference types="cypress" />

describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/kontakt');
  });

  it('displays a success message and clears form fields when form is being submitted without errors', () => {
    cy.get('[data-cy="contact-name-input"]').type('Jacob');
    cy.get('[data-cy="contact-email-input"]').type('xyz@wp.pl');
    cy.get('[data-cy="contact-message-input"]').type('Hello');
    cy.get('[data-cy="contact-submit-btn"]').click();

    cy.get('.Toastify').contains(/Wiadomość została wysyłana/);
    cy.get('[data-cy="contact-name-input"]').should('have.value', '');
    cy.get('[data-cy="contact-email-input"]').should('have.value', '');
    cy.get('[data-cy="contact-message-input"]').should('have.value', '');
  });

  // it('displays loading state when form is being submitted', () => {

  // })

  it('prevents the form from being submitted when some fields are missing', () => {
    cy.get('[data-cy="contact-submit-btn"]').as('submitBtn');
    cy.intercept('POST', '/kontakt').as('submitForm');

    cy.get('[data-cy="contact-name-input"]').as('nameInput').type(' ');
    cy.get('[data-cy="contact-email-input"]').type('xyz@wp.pl');
    cy.get('[data-cy="contact-message-input"]').type('Hello');
    cy.get('@submitBtn').click();

    cy.get('@submitBtn').contains(/Wysyłanie.../i);
    cy.get('@submitBtn').should('have.attr', 'aria-disabled');
    cy.wait('@submitForm')
      .its('response.body')
      .should('contain', 'Popraw pola formularza i spróbuj ponownie')
      .and('contain', 'Imię jest wymagane');
    cy.get('.Toastify').contains('Popraw pola formularza i spróbuj ponownie');
    cy.get('@nameInput').should('have.attr', 'class').and('match', /error/);
    cy.get('@nameInput').siblings().contains('Imię jest wymagane');
  });

  // it('displays validation errors', () => {

  // })
});
