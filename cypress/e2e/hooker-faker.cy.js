import { faker } from '@faker-js/faker';
import { mocha } from "mocha";
const arv = require('../data.json');
const p = require('../fixtures/perfil.json')
const fs = require('fs');
const user2 = JSON.stringify(arv);
const user = JSON.parse(user2);

const chai = require('chai');
const expect = chai.expect;
const meuModulo = require('./login'); // importa o módulo que contém a lógica de login
const userData = require('./users.json'); // importa o arquivo JSON que contém os dados dos usuários

describe.skip('Hooks e Faker', () => {
  beforeEach('Use o hook beforeEach para executar uma ação comum em todos os testes, como fazer login no aplicativo da web', ()=>{
    cy.visit('/minha-conta/')
    cy.get('#username').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('.woocommerce-form > .button').click()
  })  

  it('Use a biblioteca Faker para gerar dados aleatórios para preencher formulários de teste, como endereços de e-mail e senhas', () => {
    // logout
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    cy.get('.icon-user-unfollow').click()

    cy.visit('/minha-conta/')
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type(faker.internet.password())
    cy.get(':nth-child(4) > .button').click()
  });

  it('Escreva testes que usem dados aleatórios gerados pelo Faker para validar a entrada do usuário em diferentes formulários', () => {
     // logout
     cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
     cy.get('.icon-user-unfollow').click()
 
    cy.get('#username').type(faker.internet.email())
    cy.get('#password').type(faker.internet.password())
    cy.get('.woocommerce-form > .button').click()
  })

})

describe.skip('Listas e variáveis:', () => {

  it('Use variáveis do Cypress para armazenar dados comuns em diferentes testes, como credenciais de login ou URLs de página da web', () => {
    
  const usuarios = [
    {usuario: 'user1', senha: 'senha1'},
    {usuario: 'user2', senha: 'senha2'},
    {usuario: 'user3', senha: 'senha3'}
  ];
    
  cy.visit('/minha-conta/')
  usuarios.forEach(perfil => {
    cy.get('#username').clear()
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').clear()
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  });
  })

  it('Use loops e comandos Cypress para iterar sobre uma lista de elementos na página da web e validar sua presença ou conteúdo', () => {
    cy.visit('/')
    cy.get('.widget-inner').each(($s1) => {
      cy.wrap($s1).invoke('text').then((text) => {
        expect(text).to.contain('Ingrid Running Jacket')
      })
    })
  })
  
  it('Escreva testes que usem dados de um arquivo de dados para validar o comportamento do aplicativo em diferentes cenários ', () => {
      userData.usuarios.forEach(user => {
        meuModulo.registrar(user.email, user.senha);
        meuModulo.login(user.email, user.senha);
      });
    });
  });
    
describe('Arquivo de Dados:', () => {
  it('Crie um arquivo de dados em formato JSON para armazenar dados comuns usados em diferentes testes, como nomes de usuário e senhas', () => {
      for(var i = 0; i < userData.usuarios.length; i++){
        meuModulo.login(userData.usuarios[i].email, userData.usuarios[i].senha)
      }
  });

  it.only('Use o comando Cypress.readFile para ler dados de um arquivo de dados durante a execução do teste', () => {
    //erro no file, nao ta reconhecendo
    
    Cypress.readFile('./users.json').then(userReadfile =>
      userReadfile.forEach(userReadfile =>{
        meuModulo.registrar(userReadfile.nome,userReadfile.senha)
      })
  )});
});


  it.skip('', () => {
    

    cy.get('.widget-inner').each(($s1) => {
      expect($s1).to.contain('Josie Yoga Jacket')
    })
  

    
    cy.visit('/minha-conta/')
    cy.get('#reg_email').type(Cypress.env('username'))
    cy.get('#reg_password').type(Cypress.env('password'))
    cy.get(':nth-child(4) > .button').click()
  });

  //Arquivo de Dados
  it.skip('Crie um arquivo de dados em formato JSON para armazenar dados comuns usados em diferentes testes, como nomes de usuário e senhas', () => {
    cy.visit('/minha-conta/')
    user.usuarios.forEach(p => {
      cy.get('#username').clear()
      cy.get('#username').type(p.nome)
      cy.get('#password').clear()
      cy.get('#password').type(p.senha)
      cy.get('.woocommerce-form > .button').click()

    });
    });



  it.skip('validar usuários não cadastrados', () => {
    cy.visit('/minha-conta/')
    cy.get('#username').type(faker.internet.email())
    cy.get('#password').type(faker.internet.password())
    cy.get('.woocommerce-form > .button').click()
  });

  it.skip('validar listas de usuários', () => {

    c
  });

