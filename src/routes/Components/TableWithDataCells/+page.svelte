<script lang="ts">
	import Table from '$lib/uiComponents/Table/Table.svelte'
	import columnConfigs from './columnConfigs'
	import rowsData from './rowsData'
</script>

<h3>Eine Table, die unsere cleveren DataCells nutzt.</h3>
<Table {rowsData} {columnConfigs} />
