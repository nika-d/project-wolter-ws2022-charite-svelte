<script lang="ts">
	export let columnConfigs
	export let rowData

	function getComponentAndProps(config) {
		const content = {
			component: config.cellComponent,
			props: {}
		}
		config.componentProps.forEach((propname) => (content.props[propname] = rowData[propname]))
		return content
	}

	const columnsContent = columnConfigs.map((config) =>
		config.cellComponent ? getComponentAndProps(config) : config.valueFromRowGetterFunction(rowData)
	)
</script>

{#each columnsContent as content}
	<td>
		{#if content?.component}
			<svelte:component this={content.component} {...content.props} />
		{:else}
			{content}
		{/if}
	</td>
{/each}
