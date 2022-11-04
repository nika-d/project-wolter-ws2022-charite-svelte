import { Chapter, MenuContent, Route } from './navigation/typesForNavigation'

export const menuContent = new MenuContent([
	new Chapter(new Route('Basics', 'Basics'), []),

	new Chapter(new Route('Components', 'Components'), [
		new Route('Button', 'Button'),
		new Route('Badge', 'Badge'),
		new Route('Checkbox', 'Checkbox'),
		new Route('Chip', 'Chip'),
		new Route('TextInput', 'TextInput'),
		new Route('Select', 'Select'),
		new Route('Dropdown', 'Dropdown'),
		new Route('MultipleChoiceFilter', 'MultipleChoiceFilter'),
		new Route('Table', 'Table'),
		new Route('TableEditable', 'TableEditable'),
		new Route('TableWithDataCells', 'TableWithDataCells'),
		new Route('TableWithFilterComposition', 'TableWithFilterComposition')
	])
])
