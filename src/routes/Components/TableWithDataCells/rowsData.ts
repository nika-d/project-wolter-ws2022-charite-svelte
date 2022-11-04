import { RowData } from '$lib/uiComponents/Table/RowData'

class MyRowData extends RowData {
	text: string
	smiley: string
	simpleText: string

	constructor(text: string, smiley: string, simpleText: string) {
		super()
		this.text = text
		this.smiley = smiley
		this.simpleText = simpleText
	}
}

export default [
	new MyRowData('nice', '🙂', 'im nice'),
	new MyRowData('angry', '😠', 'im not nice'),
	new MyRowData('magic', '🦄', 'im a unicorn')
]
