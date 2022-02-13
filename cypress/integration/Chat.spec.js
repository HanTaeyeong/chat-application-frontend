/// <reference types="cypress" />

const hostURL = 'http://localhost:3000/'

// open backend server on port 5000 before running this test.

const userName = 'hty'
const room = '1234'



const navigateToChatPage = () => {
    cy.visit(hostURL)
    cy.get('.join-input').first().type(userName, { delay: 10 })
    cy.get('.join-input').last().type(room, { delay: 10 })
    cy.get('.join-sign-in-button').click();
    cy.url().should('eq', `http://localhost:3000/chat?name=${userName}&room=${1234}`)
}

context('Join Page test', () => {
    beforeEach(() => {
        navigateToChatPage()
    })

    it('page url test', () => {
        cy.url().should('eq', `http://localhost:3000/chat?name=${userName}&room=${1234}`)
    })
    it('page render test', () => {
        cy.get('.infobar-left-inner-container > h3')
            .should('have.text', room)
    })

    it('welcome message render correctly', () => {
        const welcomeMessage = cy.get('.message-container').first()
        welcomeMessage.should('have.class', 'flex-start')
        welcomeMessage.find('div > p').first().should('have.text', 'admin')

        const welcomeText = cy.get('.message-container').first().find('div').last();
        welcomeText.should('have.class', 'background-light')
        welcomeText.find('p').should('have.text', 'hty welcome to the 1234')
    })

    it('typying new message render correctly',()=>{
        cy.get('#message-input').type('some sample message',{delay:10});
        cy.get('.send-button').click();
        cy.contains('some sample message').should('have.text','some sample message')
        cy.contains('some sample message').should('have.class','color-white')
        cy.contains('some sample message').closest('div').should('have.class','background-blue')
    })

    it('clicking X button should leave the chat room',()=>{
        cy.get('[alt="close-icon"]').click();
        cy.url().should('eq','http://localhost:3000/')
    })

})
