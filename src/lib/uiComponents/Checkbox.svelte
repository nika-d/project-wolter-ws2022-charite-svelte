<script lang="ts">
	import { v4 as uuidv4 } from 'uuid'

	export let option: unknown = '',
		checked = false,
		value: unknown = null,
		disabled = false

	export const toggle = () => (checked = !checked)

	const labelText = option,
		id: string = uuidv4()

	$: if (checked) value = option
	else value = null
</script>

<div class="form-check">
	<input class="form-check-input" {id} type="checkbox" value="" bind:checked {disabled} />
	<label class="form-check-label" for={id} on:click|stopPropagation on:keypress|stopPropagation>
		{labelText}
	</label>
</div>
