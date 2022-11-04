import ZeitSpanne from '$lib/models/common/ZeitSpanne'
import FilterComposition from '$lib/uiComponents/Filter/FilterComposition'
import ColumnConfig from '$lib/uiComponents/Table/ColumnConfig'
import { RowData } from '$lib/uiComponents/Table/RowData'
import CellComponentForTest from './CellComponentForTest.svelte'

export const special = 'special',
	specialNummer = 25

class TestRowData extends RowData {
	specialData: string
	zeitspanne: ZeitSpanne
	nummer: number

	constructor(specialData, zeitspanne, number) {
		super()
		this.specialData = specialData
		this.zeitspanne = zeitspanne
		this.nummer = number
	}
}

export const rowsData: Array<TestRowData> = [
	new TestRowData('very', new ZeitSpanne('1995-12-17T03:24:00', '1995-12-17T03:25:00'), 23),
	new TestRowData(
		special,
		new ZeitSpanne('1998-12-17T03:24:00', '1998-12-17T03:25:00'),
		specialNummer
	),
	new TestRowData('data', new ZeitSpanne('2001-12-17T03:24:00', '2001-12-17T03:25:00'), 27)
]

export const columnConfigs: Array<ColumnConfig> = [
	new ColumnConfig((row: TestRowData) => row.nummer, 'nummer'),
	new ColumnConfig(
		(row: TestRowData) => row,
		'special data',
		['specialData'],
		null,
		CellComponentForTest
	),
	new ColumnConfig((row: TestRowData) => row.zeitspanne, 'zeitspanne')
]
export const filterComposition: FilterComposition = new FilterComposition()

export function createFilterForSecondRow(filterComposition: FilterComposition) {
	const filter = filterComposition.createFilterInComposition<number>()
	filter.set_getFilterableData((rowData: TestRowData) => rowData.nummer)
	const filterSpecial = (cellData) => cellData != specialNummer
	filter.set_filter(filterSpecial)
}
