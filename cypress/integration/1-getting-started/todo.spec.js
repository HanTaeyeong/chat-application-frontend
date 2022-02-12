/// <reference types="cypress" />

const hostURL='http://localhost:3000/'

describe('Join Page test', () => {
  beforeEach(async() => {
    await cy.visit(hostURL)
  })

  it('Header', () => {
    cy.get('#join-heading').contains('Join')
  })

  it('Inputs value is empty for initialState',()=>{
    cy.get('.join-input').first().should('have.text','')
    cy.get('.join-input').last().should('have.text','')
  })

  it('Sign In with empty value does not work',()=>{
    const button = cy.get('.join-sign-in-button')
    button.click()
    cy.url().should('eq',hostURL)
  })

  it('type input Name And Room',()=>{
    const nameInput= cy.get('#join-input-name').type('hty')
    const roomInput= cy.get('#join-input-room').type('1234')
    
  })
 
})
