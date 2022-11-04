import { describe, it, expect } from 'vitest'
import mapPossibleChoicesToUniqueChoiceViews from '../../../src/lib/uiComponents/Filter/MultipleChoice/mapChoicesToUniqueChoiceViewsModels'
import { ChoiceViewModel } from '../../../src/lib/uiComponents/Filter/MultipleChoice/ChoiceViewModel'

describe('mapPossibleChoicesToUniqueChoiceViews', function () {
	it('should transform primitives', () => {
		const possibleChoices = ['Auswahl A', 'Eine sehr lange Auswahlmöglichkeit', 'C', '20']

		const mapped = mapPossibleChoicesToUniqueChoiceViews(possibleChoices)
		expect(mapped['Auswahl A']).toHaveProperty('equivalentChoices')
	})

	it('should bundle same primitives to eqivalent option', () => {
		const mehrfachVorkommenderWert = 'Auswahl A'
		const possibleChoices = [
			mehrfachVorkommenderWert,
			mehrfachVorkommenderWert,
			'Eine sehr lange Auswahlmöglichkeit',
			'C',
			'20'
		]

		const mapped = mapPossibleChoicesToUniqueChoiceViews(possibleChoices)
		expect(mapped[mehrfachVorkommenderWert]).toBeInstanceOf(ChoiceViewModel)
		expect(mapped[mehrfachVorkommenderWert].equivalentChoices.length).toBe(2)
	})
})
