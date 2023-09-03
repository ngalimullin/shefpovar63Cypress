/// <reference types='cypress' />

describe('apiTest', () => {
    const BASE_URL = 'https://shefpovar63.ru/'

    it('testStatus', () => {
        cy.api(`${BASE_URL}/?rest_route=/wp/v2/posts/1`)
            .then(response => {
                console.log(response);
            })
            .its('status')
            .should(`be.eq`, 200)
    })
    it('testPostKeyID', () => {
        cy.api(`${BASE_URL}/?rest_route=/wp/v2/posts/1`)
            .then(responseBody => {
                console.log('responseBody =', responseBody)
            })
            .its('body')
            .then (responseBody => {
                expect(responseBody).to.have.any.keys('id','date')
            })
    })
})