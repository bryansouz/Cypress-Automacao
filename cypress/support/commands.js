// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('/minha-conta/')
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
 })
 Cypress.Commands.add('css', (text, ul) => {
  cy.visit('/')
  const li = document.createElement('li');
  const u = cy.get('#primary-menu');
  

  if (u) {
    console.log(u);
    li.innerText = text;
    return u.find(li);
  }else{
    console.log('erro');
    console.log(u);
  }
  
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject, options) => {
    return cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
      cy.on('window:alert', () => {
        cy.get('@windowAlert').then((stub) => {
          stub.restore();
        });
      });
      if (subject) {
        return cy.wrap(subject).click();
      } else {
        cy.wait(0);
      }
    });
  });
  
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
