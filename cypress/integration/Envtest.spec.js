
/// <reference types="cypress" />

const {REACT_APP_TEST_DATA_HOST_URL,REACT_APP_TEST_DATA_NAME,REACT_APP_TEST_DATA_ROOM }= process.env;

const hostURL = Cypress.env('REACT_APP_TEST_DATA_HOST_URL') || 'http://localhost:3000/'

// open backend server on port 5000 before running this test.

const userName = REACT_APP_TEST_DATA_NAME || 'hty'
const room = REACT_APP_TEST_DATA_ROOM || '1234'

const navigateToChatPage = () => {
   
    cy.visit(hostURL)
    cy.get('.join-input').first().type(userName, { delay: 10 })
    cy.get('.join-input').last().type(room, { delay: 10 })
    cy.get('.join-sign-in-button').click();
    cy.url().should('eq', `${hostURL}chat?name=${userName}&room=${room}`)
}

context('Join Page test', () => {
    beforeEach(() => {
       
    })

    it('page url test', () => {
        cy.log('mock test started')
        cy.log(hostURL, userName, room)
        
        //cy.url().should('eq','localhost')
        //cy.url().should('eq', `${hostURL}chat?name=${userName}&room=${room}`)
    })
})
