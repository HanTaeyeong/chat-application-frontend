/// <reference types="cypress" />


const hostURL = Cypress.env('HOST_URL') || 'http://localhost:3000/'

const userName = 'tyty'
const room = "WIEJFDLFKE"

context('Join Page test', () => {
    beforeEach(() => {
        cy.visit(hostURL)
    })

    it('Header', () => {
        cy.get('#join-heading').contains('Join')
    })

    it('Inputs value is empty for initialState', () => {
        cy.get('.join-input').should('have.text', '')
    })

    it('Sign In with empty value does not work', () => {
        const button = cy.get('.join-sign-in-button')
        button.click()
        cy.url().should('eq', hostURL)
    })

    it('type input Name And Room', () => {
        cy.get('.join-input').first().type('hty', { delay: 10 })
        cy.get('.join-input').last().type('1234', { delay: 10 })
        cy.get('.join-sign-in-button').click();
        cy.url().should('eq',`${hostURL}chat?name=${userName}&room=${room}`)
    })
})
