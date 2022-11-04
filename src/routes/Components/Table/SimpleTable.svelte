<script lang="ts">
	import Table from '$lib/uiComponents/Table/Table.svelte'
	import { tableRowsData as simpleRowsData, simpleColumnConfigs } from './tableRowsData'
	import ColumnNamesHead from '$lib/uiComponents/Table/tableHeaders/ColumnNamesHead.svelte'
	console.log(simpleRowsData)
	console.log(simpleColumnConfigs)
</script>

<Table rowsData={simpleRowsData} columnConfigs={simpleColumnConfigs}>
	<ColumnNamesHead columnConfigs={simpleColumnConfigs} />
</Table>
