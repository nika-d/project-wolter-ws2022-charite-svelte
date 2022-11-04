import ColumnConfig from '$lib/uiComponents/Table/ColumnConfig'
import CellComponent from './CellComponent.svelte'
import { RowData } from '$lib/uiComponents/Table/RowData'

export default ColumnConfig.generateFromConfigConstants([
	{
		caption: 'column with cell component',
		column: true,
		columnWidth: null,
		cellComponent: CellComponent,
		componentProps: ['text', 'smiley']
	},
	{
		caption: 'simple text column',
		getDataFunction: (rowData) => rowData.simpleText
	}
])
