<svelte:options accessors />

<script lang="ts">
	import tags from '../../../cypress/support/data-cy'

	export let option = '',
		active = false,
		disabled = false

	const toggle = () => {
		if (!disabled) active = !active
	}

	$: active = disabled ? false : active
</script>

<div
	class="chip d-inline-flex align-items-center"
	class:active
	class:disabled
	on:click={toggle}
	on:keypress={toggle}
	data-testid="chip"
	data-cy={tags.CHIP}
	role="checkbox"
	aria-checked={active}
>
	{option}
</div>

<style lang="scss">
	@use '../styles/basics/sizing';
	@use '../styles/basics/colors';

	.chip {
		cursor: pointer;
		color: colors.$blue_pantone_293_100;
		box-sizing: border-box;
		border: 1px solid transparent;
		padding-left: sizing.$font-size-base;
		padding-right: sizing.$font-size-base;
		background-color: colors.$blue_pantone_293_012;
		border-radius: 100px;
		min-height: 2.3 * sizing.$font-size-base;
		user-select: none;
	}

	.active {
		border: 1px solid colors.$blue_pantone_293_100;
	}

	.disabled {
		border: 1px solid colors.$grey_pantone_430_100 !important;
		background-color: colors.$white !important;
		color: colors.$grey_pantone_430_100 !important;
		cursor: not-allowed !important;
	}
</style>
