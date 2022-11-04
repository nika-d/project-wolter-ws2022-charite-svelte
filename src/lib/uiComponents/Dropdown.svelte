<script lang="ts">
	import { v4 as uuidv4 } from 'uuid'
	import Badge from './Badge.svelte'
	import tags from '../../../cypress/support/data-cy'

	export let buttonText = ' ',
		badgeText = '',
		autoClose = false,
		disabled = false

	let id = uuidv4()
</script>

<span class="dropdown">
	<button
		class="dropdown-toggle btn btn-ghost"
		type="button"
		{id}
		data-bs-toggle="dropdown"
		data-bs-auto-close={autoClose}
		{disabled}
		data-cy={tags.DROPDOWN_BUTTON}
	>
		{buttonText}

		{#if badgeText}
			<Badge>
				{badgeText}
			</Badge>
		{/if}
	</button>
	<div class="dropdown-menu" aria-labelledby={id}>
		<slot name="dropdown-items" />
	</div>
</span>
