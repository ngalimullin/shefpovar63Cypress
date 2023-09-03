/// <reference types='cypress' />

describe('telephone', () => {
    it('mainTelephone', () => {
        cy.visit('/')
        cy.get('.ast-custom-button-link .ast-custom-button').should('contain', '8 929 707 74 01')
        cy.get('.elementor-button-text').should('contain', '8 929 707 74 01')
    })
    it('contactsTelephone', () => {
        cy.visit('/?page_id=33')
        cy.get('.ast-custom-button-link .ast-custom-button').should('contain', '8 929 707 74 01')
        cy.get('.elementor-icon-list-item .elementor-icon-list-text:nth-child(2)').should('contain', '8 929 707 74 01')
    })
})