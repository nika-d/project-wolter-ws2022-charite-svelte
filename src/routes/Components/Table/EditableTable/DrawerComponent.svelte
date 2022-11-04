<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	export let data
	const dispatch = createEventDispatcher()
</script>

<label>
	Nummer ändern:
	<input class="form-control" type="number" bind:value={data.nummer} />
</label>
