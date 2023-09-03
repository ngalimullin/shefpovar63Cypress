/// <reference types='cypress' />

describe('mainInfoText', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('name', () => {
        cy.xpath('//div[@data-id="74d36843"]/div/h2/b').should('contain', 'Сергей Васильцов')
    })
    it('titelText', () => {
        cy.get('.elementor-image-box-content .elementor-image-box-title').should('include.text', 'Выездной шеф-повар')
        cy.get('.elementor-image-box-content .elementor-image-box-title').should('include.text', 'Самара - Тольятти')
    })
    it('smalText', () => {
        cy.get('.elementor-image-box-content .elementor-image-box-description').should('include.text', 'У вас скоро праздник? Нет сил и времени готовить')
    })
    it('secondaryText', () => {
        cy.get('[data-id="7940ca75"]').should('include.text', 'УСЛУГИ:')
    })
})