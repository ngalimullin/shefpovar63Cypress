/// <reference types='cypress' />

describe('titelVerify', () => {
    it('mainTitel', () => {
        cy.visit('/')
        cy.title().should('eq', 'Кейтеринг, Выездной повар, Доставка еды в Самаре')
    })
    it('abautMeTitel', () => {
        cy.visit('/?page_id=1390')
        cy.title().should('eq', 'Сергей Васильцов')
    })
    it('contactsTitel', () => {
        cy.visit('/?page_id=33')
        cy.title().should('eq', 'Шеф повар +7 929 707 74 01')
    })
    it('banketTitel', () => {
        cy.visit('/?page_id=583')
        cy.title().should('eq', 'Выездной банкет в Самаре')
    })
    it('barbekuTitel', () => {
        cy.visit('/?page_id=806')
        cy.title().should('eq', 'Выездной шашлычник в Самаре')
    })
    it('corparationTitel', () => {
        cy.visit('/?page_id=817')
        cy.title().should('eq', 'Повар на корпоратив, доставка еды в офис')
    })
    it('deliveryTitel', () => {
        cy.visit('/?page_id=1186')
        cy.title().should('eq', 'Доставка еды, Доставка готовых блюд, Доставка обедов')
    })
    it('buffetMeTitel', () => {
        cy.visit('/?page_id=1210')
        cy.title().should('eq', 'Выездной фуршет в Самаре')
    })
    it('masterClasTitel', () => {
        cy.visit('/?page_id=1230')
        cy.title().should('eq', 'Кулинарный мастер класс Самара')
    })
})