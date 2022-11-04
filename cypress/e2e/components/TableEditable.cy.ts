import { componentsUrl } from '../../support/e2e'
import tags from '../../support/data-cy'
import 'cypress-real-events/support'

context('TableEditable', () => {
	describe('table row', () => {
		before(() => {
			cy.visit(componentsUrl + 'TableEditable')
		})

		it('should be highlighted on hover', () => {
			cy.getBySel(tags.TABLE_ROW)
				.eq(0)
				.realHover({ position: 'bottom' })
				.should('have.css', 'background-color', 'rgb(246, 247, 247)')
		})

		it('should show edit button in highlighted row', () => {
			cy.getBySel(tags.TABLE_ROW)
				.eq(0)
				.realHover({ position: 'bottom' })
				.getBySel(tags.ROW_EDIT)
				.eq(0)
				.click()
		})

		it('should be the only highlighted when in edit', () => {
			cy.getBySel(tags.TABLE_ROW).eq(0).should('have.class', 'currentlyEdited')

			cy.getBySel(tags.TABLE_ROW).eq(1).should('not.have.class', 'currentlyEdited')
		})
	})
})
