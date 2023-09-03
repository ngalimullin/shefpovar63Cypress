/// <reference types='cypress' />

describe.skip('sendMassage', () => {
    it('verifyInput', () => {
        cy.visit('/')
        cy.get('#wpforms-689-field_0').type('test')
        cy.get('#wpforms-689-field_1').type('test@test.ru')
        cy.get('#wpforms-689-field_2').type('test')
        cy.get('[type="checkbox"]').check()
        cy.get('#wpforms-689-field_11').select('больше 10')
        // cy.get('#wpforms-submit-689').click()
        // cy.get('#wpforms-confirmation-689').should('contain.text', 'Спасибо! Ждите звонка...')
    })
})