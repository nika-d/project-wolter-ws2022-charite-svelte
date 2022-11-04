// @vitest-environment jsdom

import MultipleChoiceFilter from '../../../src/lib/uiComponents/Filter/MultipleChoice/MultipleChoiceFilter.svelte'
import Filter from '../../../src/lib/uiComponents/Filter/Filter'
import { render, fireEvent } from '@testing-library/svelte'

const drueckenZurAuswahlText = 'DrückenZurAuswahl'

describe('MutlipleChoiceFilter', function () {
	test('should include a badge in the dropdown button showing the number of selected items', async () => {
		const possibleChoices = ['Auswahl A', 'Eine sehr lange Auswahlmöglichkeit', 'C', '20']
		const filter = new Filter()
		const { getByText, getByLabelText } = render(MultipleChoiceFilter, {
			possibleChoices: possibleChoices,
			filter: filter,
			caption: drueckenZurAuswahlText
		})
		expect(() => getByText(drueckenZurAuswahlText)).not.toThrow()
		expect(() => getByText('Alle')).not.toThrow()
		expect(() => getByText('Auswahl A')).not.toThrow()
		expect(() => getByLabelText('Eine sehr lange Auswahlmöglichkeit')).not.toThrow()

		expect(getByText('Eine sehr lange Auswahlmöglichkeit').outerHTML).toContain('<label ')

		expect(getByText(drueckenZurAuswahlText).innerHTML).toContain('>Alle<')
		expect(getByText(drueckenZurAuswahlText).innerHTML).not.toContain('>3<')

		await fireEvent.click(getByText('Auswahl A'))
		expect(getByText(drueckenZurAuswahlText).innerHTML).toContain('>3<')
		expect(getByText(drueckenZurAuswahlText).innerHTML).not.toContain('>Alle<')

		await fireEvent.click(getByText('Auswahl umkehren'))
		expect(getByText(drueckenZurAuswahlText).innerHTML).toContain('>1<')
		expect(getByText(drueckenZurAuswahlText).innerHTML).not.toContain('>3<')

		await fireEvent.click(getByText('Auswahl A'))
		expect(getByText('DrückenZurAuswahl').innerHTML).toContain('>Keine<')
		expect(getByText(drueckenZurAuswahlText).innerHTML).not.toContain('>1<')

		await fireEvent.click(getByText('Auswahl umkehren'))
		expect(getByText(drueckenZurAuswahlText).innerHTML).toContain('>Alle<')
		expect(getByText(drueckenZurAuswahlText).innerHTML).not.toContain('>Keine<')
	})
})
