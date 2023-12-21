/// <reference types="cypress" />

describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/kontakt');
    cy.intercept('POST', '/kontakt').as('submitForm');
  });

  it('displays a success message and clears input fields when form is being submitted without errors', () => {
    cy.get('[data-cy=contact-name-input]').type('Jacob');
    cy.get('[data-cy=contact-email-input]').type('xyz@gmail.com');
    cy.get('[data-cy=contact-message-input]').type('Hello world');
    cy.get('[data-cy=contact-submit-btn]').click();

    cy.wait('@submitForm').its('response.body').should('contain', 'Wiadomość została wysłana');
    cy.get('.Toastify').contains('Wiadomość została wysłana');

    cy.get('[data-cy=contact-name-input]').should('have.value', '');
    cy.get('[data-cy=contact-email-input]').should('have.value', '');
    cy.get('[data-cy=contact-message-input]').should('have.value', '');
  });

  it('displays loading state when form is being submitted', () => {
    cy.get('[data-cy=contact-name-input]').type('Jacob');
    cy.get('[data-cy=contact-email-input]').type('xyz@gmail.com');
    cy.get('[data-cy=contact-message-input]').type('Hello world');
    cy.get('[data-cy=contact-submit-btn]').click();

    cy.get('[data-cy=contact-submit-btn]')
      .contains(/Wysyłanie.../i)
      .and('have.attr', 'aria-disabled', 'true');
  });

  it('displays validation errors', () => {
    cy.get('[data-cy=contact-name-input]').as('nameInput').type(' ');
    cy.get('[data-cy=contact-email-input]').type('xyz@gmail.com');
    cy.get('[data-cy=contact-message-input]').type('Hello world');
    cy.get('[data-cy=contact-submit-btn]').click();

    cy.wait('@submitForm')
      .its('response.body')
      .should('contain', 'Popraw pola formularza i spróbuj ponownie')
      .and('contain', 'Imię jest wymagane');
    cy.get('#contact-form-message').contains('Popraw pola formularza i spróbuj ponownie');
    cy.get('#contact-form-message').should('have.attr', 'class').and('match', /error/);
    cy.get('@nameInput').should('have.attr', 'class').and('match', /error/);
    cy.get('@nameInput').siblings().contains('Imię jest wymagane');
  });

  it('prevents empty form submission', () => {
    cy.get('[data-cy=contact-email-input]').type('not an email');
    cy.get('[data-cy=contact-submit-btn]').click();
    cy.get('[data-cy=contact-submit-btn]').should('have.attr', 'aria-disabled', 'false');
    cy.get('#contact-form-message').should('not.exist');
    cy.get('[data-cy=contact-name-input]')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Wypełnij to pole.');
    cy.get('[data-cy=contact-email-input]')
      .invoke('prop', 'validationMessage')
      .should('contain', 'Uwzględnij znak „@” w adresie e-mail.');
    cy.get('[data-cy=contact-message-input]')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Wypełnij to pole.');
  });
});
