<script lang="ts">
	import { v4 as uuidv4 } from 'uuid'
	import Filter from './Filter'
	import texts from '$lib/uiTexts/filter.json'
	import Dropdown from '$lib/uiComponents/Dropdown.svelte'
	import tags from '../../../../cypress/support/data-cy'

	export let filter: Filter<unknown>,
		applied = false
	let startdate = '',
		enddate = '',
		badgeText = '0'

	const startDateId = 'startdate' + uuidv4(),
		endDateId = 'enddate' + uuidv4()

	$: {
		let start = null,
			end = null
		if (startdate == '' && enddate != '') {
			end = new Date(enddate)
			badgeText = '1'
			applied = true
		} else if (startdate != '' && enddate == '') {
			start = new Date(startdate)
			badgeText = '1'
			applied = true
		} else if (startdate == '' && enddate == '') {
			badgeText = '0'
			applied = false
		} else {
			start = new Date(startdate)
			end = new Date(enddate)
			badgeText = '2'
			applied = true
		}
		filter.set_filter((terminTime) => {
			return terminTime.liegtZwischen(start, end)
		})
	}
</script>

<Dropdown {badgeText} buttonText={texts.ZEITSPANNE}>
	<span slot="dropdown-items">
		<div class="dropdown-item">
			<label for={startDateId}>{texts.STARTDATE}</label>
			<input type="date" id={startDateId} data-cy={tags.INPUT_START_DATE} bind:value={startdate} />
		</div>
		<div class="dropdown-item">
			<label for={endDateId}>{texts.ENDDATE}</label>
			<input type="date" id={endDateId} data-cy={tags.INPUT_END_DATE} bind:value={enddate} />
		</div>
	</span>
</Dropdown>

<style lang="scss">
	@use '../../../lib/styles/basics/sizing';

	label {
		display: block;
	}

	input,
	label {
		margin: sizing.$size_3 0;
	}
</style>
