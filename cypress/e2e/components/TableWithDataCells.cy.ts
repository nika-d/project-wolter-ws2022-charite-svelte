import { componentsUrl } from '../../support/e2e'
import tags from '../../support/data-cy'

context('TableWithDataCell', () => {
	describe('table row', () => {
		before(() => {
			cy.visit(componentsUrl + 'TableWithDataCells')
		})

		it('should show content of simple text cell', () => {
			cy.getBySel(tags.TABLE_ROW).eq(2).find('td').eq(1).should('have.text', 'im a unicorn ')
		})
		it('should show content of cell with special component', () => {
			cy.getBySel(tags.TABLE_ROW).eq(2).find('td').eq(0).should('have.text', 'magic🦄 ')
		})
	})
})
