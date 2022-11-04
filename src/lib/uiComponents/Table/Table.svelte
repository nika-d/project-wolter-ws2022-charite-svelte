<script lang="ts">
	import Drawer from './Drawer.svelte'
	import tags from '../../../../cypress/support/data-cy'
	import type ColumnConfig from './ColumnConfig'
	import type { RowData } from './RowData'
	import DataCells from './DataCells.svelte'
	import TableHeader from './TableHeader.svelte'
	import { SvelteComponent } from 'svelte'
	import t from '$lib/uiTexts/Table.json'

	export let rowsData: Array<RowData>,
		columnConfigs: ColumnConfig[],
		rowEditDrawerComponent: SvelteComponent = null,
		drawerHeading = t.ZEILE_BEARBEITEN

	const isEditable = rowEditDrawerComponent != null

	let drawerIsOpen = false,
		currentlyEditedRowIndex: number

	const drawerActions = {
		open(index: number) {
			currentlyEditedRowIndex = index
			drawerIsOpen = true
		},

		close() {
			currentlyEditedRowIndex = undefined
			drawerIsOpen = false
			rowsData = rowsData
		}
	}

	function next() {
		if (rowsData.length - 1 !== currentlyEditedRowIndex) {
			currentlyEditedRowIndex++
		}
	}
</script>

<table class="table" data-cy="termin-table">
	<TableHeader headerNames={columnConfigs.map((conf) => conf.displayName)} {isEditable} />
	<tbody>
		{#each rowsData as rowData, index (rowData.id)}
			<tr
				data-cy={tags.TABLE_ROW}
				class:disable={drawerIsOpen && currentlyEditedRowIndex != index}
				class:currentlyEdited={currentlyEditedRowIndex === index}
			>
				<DataCells {columnConfigs} {rowData} />

				{#if isEditable}
					<td>
						<button
							class="btn btn-primary"
							type="button"
							data-cy={tags.ROW_EDIT}
							on:click={() => drawerActions.open(index)}
							on:keypress={() => drawerActions.open(index)}
						>
							<span class="material-icons">&#xe3c9;</span>
						</button>
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

{#if isEditable}
	<Drawer
		bind:isOpen={drawerIsOpen}
		let:data
		data={rowsData[currentlyEditedRowIndex]}
		{drawerHeading}
		on:closeDrawer={() => drawerActions.close()}
	>
		{#if drawerIsOpen}
			<svelte:component this={rowEditDrawerComponent} {data} on:next={() => next()} />
		{/if}
	</Drawer>
{/if}

<style lang="scss">
	@use '../../styles/basics/colors' as colors;
	@use '../../styles/charite' as *;

	.disable:hover {
		background-color: colors.$white;
	}

	tr.currentlyEdited {
		background-color: colors.$grey_pantone_430_009;
	}

	tr:not(:hover) td:last-child button {
		@extend .invisible;
	}
</style>
