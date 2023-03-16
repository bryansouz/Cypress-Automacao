// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
var allure = require('allure-commandline');

// returns ChildProcess instance
var generation = allure(['generate', 'allure-results']);

generation.on('exit', function(exitCode) {
    console.log('Generation is finished with code:', exitCode);
});
// Alternatively you can use CommonJS syntax:
// require('./commands')


// utils.js
export default class LoginPage {
    login(email, password) {
        cy.visit('/minha-conta/')
        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        }
    register(email, password){
        cy.visit('/minha-conta/')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        }
    

    }
