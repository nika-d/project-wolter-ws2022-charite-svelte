<script lang="ts">
	import Table from '$lib/uiComponents/Table/Table.svelte'
	import { columnConfigs, rowsData } from './testData'
	import DrawerComponent from './DrawerComponent.svelte'
</script>

<div class="row vh-100 justify-content-center align-items-center">
	<div class="col-auto">
		<h3>Editierbare Tabelle</h3>
		<p>
			Hier eine Tabelle mit einer Unterkomponente für die Daten der ersten Spalte. Die Daten werden
			gefiltert, und damit sollten hier 2 Zeilen mit Daten zu sehen sein.
		</p>
		<Table {rowsData} {columnConfigs} rowEditDrawerComponent={DrawerComponent} />
	</div>
</div>
