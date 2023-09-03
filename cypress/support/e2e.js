// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events"
import 'cypress-plugin-api'

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

// top of the test, or in /cypress/support/e2e.js

Cypress.on('log:changed', (log, interactive) => {
    const logs = window.top.document.querySelectorAll('.command-message-text')
    const last = [...logs][logs.length - 1]
    if (last.innerText.length > 20) {
        last.innerText = last.innerText.slice(0, 20) + '...'
    }
})