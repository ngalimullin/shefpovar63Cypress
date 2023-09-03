/// <reference types='cypress' />

describe('inputText', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('bigInputText', () => {
        cy.get('[data-id="e76e5b1"]').should('contain', 'Сделаю индивидуальное предложение')
    })
    it('smalInputText', () => {
        cy.get('.elementor-widget-container p b').should('contain', 'Хотите скидку 10%?')
    })
})