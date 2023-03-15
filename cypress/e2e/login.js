// login.js

function login(email, senha) {
    // Lógica de login aqui
   
    cy.visit('/minha-conta/')
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()

  }
  
  function registrar(email, senha) {
   
    cy.visit('/minha-conta/')
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    
  }  
  
  module.exports = {
    login: login,
    registrar: registrar
  };
  