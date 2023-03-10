/// <reference types="cypress" /> 

var faker = require('@faker-js/faker')
var perfil = require('..fixtures/perfil.json')



describe('test-website-shoes',()=>{
    beforeEach(() => {
        cy.visit('auth/login');
        cy.get('#user').type(perfil.username);
        cy.get('#password').type(perfil.password);
        cy.get(':nth-child(6) > .column > .form-group > [data-testid="submitButton"]').click()
    })

    it("verificar-propaganda", ()=>{
        cy.get('.overlay-floater_banner > a > img').should('exist')
        cy.get('.overlay-floater_banner > .ns-icon').click()

        cy.get('.navbar__hamburger--box').click()
        cy.get('.navbar__dropdown--category').should('be-visible')
    })
})
