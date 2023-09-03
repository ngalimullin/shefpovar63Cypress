/// <reference types='cypress' />

describe('headerLinkName', () => {
    it('verifyMain', () => {
        cy.visit('/')
        cy.get('#menu-item-1276').should('have.text', 'Главная')
        cy.get('#menu-item-1510 a.menu-link').should('have.text', 'Обо мне')
        cy.get('#menu-item-1277 a.menu-link').should('have.text', 'Контакты')
    })
    it('verifyAboutMe', () => {
        cy.visit('/?page_id=1390')
        cy.get('#menu-item-1276').should('have.text', 'Главная')
        cy.get('#menu-item-1510 a.menu-link').should('have.text', 'Обо мне')
        cy.get('#menu-item-1277 a.menu-link').should('have.text', 'Контакты')
    })
    it('verifyContacts', () => {
        cy.visit('/?page_id=33')
        cy.get('#menu-item-1276').should('have.text', 'Главная')
        cy.get('#menu-item-1510 a.menu-link').should('have.text', 'Обо мне')
        cy.get('#menu-item-1277 a.menu-link').should('have.text', 'Контакты')

    })
})