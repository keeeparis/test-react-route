import { getHandleSelector } from './drag-n-drop/util'
import * as keyCodes from './drag-n-drop/key-codes'

describe('Testing App', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-routes-test/react-routes-test') // because of github pages // base in vite.config.js
  })
  
  it('Adding new city', () => {
    cy.get(getHandleSelector()).should('have.length', 3)
    cy.get('input').type('Milan, Italy', {delay: 200})
    cy.get('form').submit()
    cy.get('input').should('have.value', '')
    cy.get(getHandleSelector()).should('have.length', 4)
  })

  it('should reorder within a list 1st and 2nd', () => {
    cy.get(getHandleSelector()).eq(0).as('first')

    // reorder operation
    cy.get('@first')
      .focus()
      .trigger('keydown', { keyCode: keyCodes.space })
      // need to re-query for a clone
      .get('@first')
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.space, force: true })

    // element should maintain focus post drag
    cy.focused()
  })

  it('should reorder within a list 1st and 3nd', () => {
    cy.get(getHandleSelector()).eq(0).as('first')

    cy.get('@first')
      .focus()
      .trigger('keydown', { keyCode: keyCodes.space })

      .get('@first')
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.space, force: true })

    cy.focused()
  })

})