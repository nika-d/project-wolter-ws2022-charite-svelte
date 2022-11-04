<script lang="ts">
	export let headerNames, isEditable
</script>

<thead class="table-light">
	<tr>
		{#each headerNames as name}
			<th>
				{name}
			</th>
		{/each}
		{#if isEditable}
			<th />
		{/if}
	</tr>
</thead>

<style lang="scss">
	@use '../../styles/basics/colors' as colors;

	thead {
		background-color: colors.$grey_pantone_430_009;
		color: colors.$grey_pantone_430_100;
		font-weight: bold;
		tr:hover {
			background-color: colors.$grey_pantone_430_009;
		}
	}
</style>
