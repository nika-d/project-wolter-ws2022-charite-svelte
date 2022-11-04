/// <reference types="cypress" />

import a from '../../support/assertionConstantsE2E'
import tags from '../../support/data-cy'
import { componentsUrl } from '../../support/e2e'

const FILTER_BUTTON = tags.MULTIPLE_CHOICE_FILTER.BUTTON,
	FILTER_OPTIONS = tags.MULTIPLE_CHOICE_FILTER.OPTION,
	RESULTS_LIST = tags.MULTIPLE_CHOICE_FILTER.COMPOSED_OBJECTS_RESULTS_LIST

describe('MultipleChoiceFilter', function () {
	before(() => cy.visit(componentsUrl + 'MultipleChoiceFilter/ComposedObjects'))

	it('should present choices with same text as single choice and treat them as equivalents', () => {
		cy.contains(FILTER_BUTTON).click()
		cy.getBySel(FILTER_OPTIONS).contains('SOME_NAME').click()

		cy.getBySel(RESULTS_LIST)
			.should('contain', 'OTHER_NAME')
			.should('have.length', 1)
			.should('not.contain', 'SOME_NAME')
	})
})
