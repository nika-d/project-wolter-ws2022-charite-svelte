import ColumnConfig from '$lib/uiComponents/Table/ColumnConfig'
import { RowData } from '$lib/uiComponents/Table/RowData'

export class TableData extends RowData {
	veranstaltung: string
	gruppen: string
	ort: string
	campus: string
	lehrenden: string[]

	constructor(veranstaltung, gruppen, ort, campus, lehrenden) {
		super()
		this.veranstaltung = veranstaltung
		this.gruppen = gruppen
		this.ort = ort
		this.campus = campus
		this.lehrenden = lehrenden
	}
}

export const tableRowsData: Array<TableData> = [
	new TableData('POL M5-2', '5, 6, 7', 'Seminarraum 4', 'CCM', [
		'Petra Musterfrau, Pippi Langstrumpf'
	]),
	new TableData('Vorlesung 2', '5, 8, 9', 'Hörsaal Ost', 'CBF', ['']),
	new TableData(
		'Vom Mikroskopieren zum Makroskopieren in 28 einfachen Schritten',
		'A, B, 7',
		'Hörsaal West',
		'CVK',
		['Noch Niemand']
	)
]

export const simpleColumnConfigs = [
	new ColumnConfig((row: TableData) => row.veranstaltung, 'Veranstaltung'),
	new ColumnConfig((row: TableData) => row.gruppen, 'Gr.'),
	new ColumnConfig((row: TableData) => row.ort, 'Ort'),
	new ColumnConfig((row: TableData) => row.campus, 'Campus'),
	new ColumnConfig((row: TableData) => row.lehrenden, 'Lehrenden', undefined, 30)
]
