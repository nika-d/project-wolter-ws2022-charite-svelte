<script lang="ts">
	import '$lib/styles/charite.scss'
	import Navigation from '$lib/showcase/navigation/Navigation.svelte'

	import { onMount } from 'svelte'

	let bootstrap
	onMount(async () => {
		bootstrap = await import('bootstrap')
	})
</script>

{#if bootstrap}
	<div class="vh-100 container-fluid m-0 p-0">
		<div class="row m-0 p-0 gx-0 gy-0">
			<div class="col-md m-0 p-0 sidenav-250-px">
				<Navigation />
			</div>
			<div class="col-md p-3 p-md-0">
				<slot>No page in slot</slot>
			</div>
		</div>
	</div>
{/if}

<style>
	.sidenav-250-px {
		max-width: 250px;
	}
</style>
