<script lang="ts">
	import Filter from '$lib/uiComponents/Filter/Filter'
	import MultipleChoiceFilter from '$lib/uiComponents/Filter/MultipleChoice/MultipleChoiceFilter.svelte'
	import tags from '../../../../../cypress/support/data-cy'
	import { Filterable } from '../Filterable'
	import { InnerObject } from '../InnerObject'

	const allData = [
			new Filterable(1, new InnerObject('SOME_NAME')),
			new Filterable(2, new InnerObject('OTHER_NAME')),
			new Filterable(3, new InnerObject('SOME_NAME'))
		],
		allNames = allData.map((d) => d.innerObject)

	let numberOfSelectedChoices: number

	let filterFunction: unknown = () => true

	let filter = new Filter<Array<unknown>>(
		(updatedFilterFunction) => (filterFunction = updatedFilterFunction)
	)
	filter.set_getFilterableData((d) => d.innerObject)

	let gefilterteListe = allData
	$: gefilterteListe = allData.filter(filterFunction as (value: Filterable) => boolean)
</script>

<p>Hier eine Liste:</p>
<ul>
	{#each allData as element}
		<li>{element}</li>
	{/each}
</ul>
<MultipleChoiceFilter
	caption={tags.MULTIPLE_CHOICE_FILTER.BUTTON}
	possibleChoices={allNames}
	bind:numberOfSelectedChoices
	bind:filter
/>
<p>
	Es sind {numberOfSelectedChoices} Element(e) in der UI ausgewählt,<br />
	und damit enthält die Liste {gefilterteListe.length} Elemente:
</p>
<ul data-cy={tags.MULTIPLE_CHOICE_FILTER.COMPOSED_OBJECTS_RESULTS_LIST}>
	{#each gefilterteListe as element}
		<li>{element}</li>
	{/each}
</ul>
