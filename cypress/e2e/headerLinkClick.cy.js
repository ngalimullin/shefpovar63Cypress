/// <reference types='cypress' />

describe('headerLinkClick', () => {
    it('verifyMain', () => {
        cy.visit('/')
        cy.get('#menu-item-1276 a.menu-link').click()
        cy.url().should('eq', 'https://shefpovar63.ru/')
        cy.get('#menu-item-1510 a.menu-link').click()
        cy.url().should('include', '/?page_id=1390')
        cy.get('#menu-item-1276 a.menu-link').click()
        cy.get('#menu-item-1277 a.menu-link').click()
        cy.url().should('include', '/?page_id=33')
    })
    it('verifyAboutMe', () => {
        cy.visit('/?page_id=1390')
        cy.get('#menu-item-1276 a.menu-link').click()
        cy.url().should('eq', 'https://shefpovar63.ru/')
        cy.get('#menu-item-1510 a.menu-link').click()
        cy.url().should('include', '/?page_id=1390')
        cy.get('#menu-item-1277 a.menu-link').click()
        cy.url().should('include', '/?page_id=33')
    })
    it('verifyContacts', () => {
        cy.visit('/?page_id=33')
        cy.get('#menu-item-1276 a.menu-link').click()
        cy.url().should('eq', 'https://shefpovar63.ru/')
        cy.get('#menu-item-1277 a.menu-link').click()
        cy.url().should('include', '/?page_id=33')
        cy.get('#menu-item-1510 a.menu-link').click()
        cy.url().should('include', '/?page_id=1390')
    })
})