<script lang="ts">
	import { clickOutside } from './clickOutside'
	import tags from '../../../../cypress/support/data-cy'
	import { createEventDispatcher } from 'svelte'

	export let isOpen = false,
		drawerHeading = '',
		data: unknown

	const dispatch = createEventDispatcher()
</script>

<div
	class="drawer"
	class:hide={!isOpen}
	class:show={isOpen}
	use:clickOutside={() => {
		if (isOpen) dispatch('closeDrawer')
	}}
	data-cy={tags.DRAWER}
>
	<div class="row heading">
		<span class="col-auto">{drawerHeading}</span>
		<div
			class="col d-flex justify-content-end close-btn"
			on:click={() => {
				dispatch('closeDrawer')
			}}
			on:keypress={() => {
				dispatch('closeDrawer')
			}}
			data-cy={tags.DRAWER_CLOSE}
		>
			<button type="button" class="btn btn-ghost">
				<span class="material-icons">&#xe5cd;</span>
			</button>
		</div>
	</div>
	<slot {data} />
</div>

<style lang="scss">
	@use '../../styles/basics/colors' as colors;
	@use '../../styles/basics/shadows' as shadows;
	@use '../../styles/basics/sizing' as *;

	$drawer-width: 500px;
	$wrapper-padding: 33px;

	.heading {
		font-size: 24px;
		border-bottom: 1px solid colors.$grey_pantone_430_100;
		display: flex;
		justify-content: center;
		height: $drawer-heading-height;
	}

	.drawer {
		@include shadows.medium-shadow;
		width: $drawer-width;
		height: 100vh;
		position: fixed;
		top: 0;
		z-index: 10;
		right: calc($drawer-width * -1);
		background-color: white;
		transition: all 0.1s ease;
		overflow-y: hidden;
	}

	.drawer.show {
		transform: translateX(-100%);
	}

	.drawer.hide {
		transform: translateX(100%);
	}

	.drawer {
		padding: $wrapper-padding;
	}

	.close-btn {
		cursor: pointer;
		padding-top: $size_2;
	}
</style>
