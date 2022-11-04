<script lang="ts">
	import Chip from '$lib/uiComponents/Chip.svelte'
	import FilterComponentConfig from '$lib/uiComponents/Filter/FilterComponentConfig'
	import FilterComposition from '$lib/uiComponents/Filter/FilterComposition'
	import MultipleChoiceFilter from '$lib/uiComponents/Filter/MultipleChoice/MultipleChoiceFilter.svelte'
	import ColumnConfig from '$lib/uiComponents/Table/ColumnConfig'
	import Table from '$lib/uiComponents/Table/Table.svelte'
	import ColumnNamesHead from '$lib/uiComponents/Table/tableHeaders/ColumnNamesHead.svelte'
	import FilterControls from '$lib/uiComponents/Table/tableHeaders/FilterControls.svelte'
	import type { TableData } from '../Table/tableRowsData'
	import { tableRowsData as rowsData } from '../Table/tableRowsData'

	const filterComposition = new FilterComposition()
	const composedFilterFunction = filterComposition.applyComposedFilters

	const veranstaltungsFilter = filterComposition.createFilterInComposition()
	veranstaltungsFilter.set_getFilterableData((row: TableData) => row.veranstaltung)
	const veranstaltungen = rowsData.map((row: TableData) => row.veranstaltung)
	const veranstaltungsFilterConfig = new FilterComponentConfig(MultipleChoiceFilter, {
		caption: 'Veranstaltung',
		possibleChoices: veranstaltungen,
		filter: veranstaltungsFilter
	})

	const gruppenFilter = filterComposition.createFilterInComposition()
	gruppenFilter.set_getFilterableData((row: TableData) => row.gruppen)
	const gruppen = [...new Set(rowsData.map((row: TableData) => row.gruppen))]
	const gruppenFilterConfig = new FilterComponentConfig(MultipleChoiceFilter, {
		caption: 'Gruppen',
		possibleChoices: gruppen,
		filter: gruppenFilter
	})

	const columnConfigs = [
		new ColumnConfig((row) => row.veranstaltung, 'Veranstaltung'),
		new ColumnConfig((row) => row.gruppen, 'Gr.'),
		new ColumnConfig((row) => row.ort, 'Ort'),
		new ColumnConfig((row) => row.campus, 'Campus'),
		new ColumnConfig((row) => row.lehrenden, 'Lehrenden', undefined, 30),
		new ColumnConfig(() => 'chip', 'Chip', undefined, 10, Chip)
	]

	const filterConfigs = [veranstaltungsFilterConfig, gruppenFilterConfig]

	let filter = $composedFilterFunction

	let visibleRowsData: Array<TableData>

	$: {
		filter = $composedFilterFunction
		visibleRowsData = rowsData.filter((rowsData) => filter(rowsData))
	}
</script>

<div class="row h-100 justify-content-center align-items-center">
	<div class="col-xl-6">
		<FilterControls {filterComposition} {filterConfigs} />
		<Table {columnConfigs} rowsData={visibleRowsData}>
			<ColumnNamesHead {columnConfigs} />
		</Table>
	</div>
</div>
