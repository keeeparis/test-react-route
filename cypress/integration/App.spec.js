import { getHandleSelector } from './drag-n-drop/util'
import * as keyCodes from './drag-n-drop/key-codes'

describe('Testing App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/test-react-route/test-react-route') // because of github pages
  })

  it('Adding new city', () => {
    cy.get('form').type('Milan, Italy').submit()
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