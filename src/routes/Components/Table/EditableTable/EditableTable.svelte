<script lang="ts">
	import Table from '$lib/uiComponents/Table/Table.svelte'
	import {
		columnConfigs,
		createFilterForSecondRow,
		filterComposition,
		rowsData
	} from '/vitest/uiComponents/Table/testData'
	import DrawerComponent from './DrawerComponent.svelte'

	createFilterForSecondRow(filterComposition)
</script>

<p>
	Hier eine Tabelle mit einer Unterkomponente für die Daten der ersten Spalte. Die Daten werden
	gefiltert, und damit sollten hier 2 Zeilen mit Daten zu sehen sein.
</p>
<Table
	{rowsData}
	{columnConfigs}
	rowEditDrawerComponent={DrawerComponent}
	composedFilterFunction={filterComposition.applyComposedFilters}
/>
