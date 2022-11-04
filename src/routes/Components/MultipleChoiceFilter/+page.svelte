<script lang="ts">
	import SimpleObjekte from './SimpleObjects.svelte'
	import ComposedObjects from './ComposedObjects/+page.svelte'
</script>

<div class="row h-100 justify-content-center align-content-center">
	<div class="col-6 pt-3">
		<h3>Simple Objekte</h3>
		<SimpleObjekte />
	</div>
	<div class="col-6 pt-3">
		<h3>Zusammengesetzte Objekte</h3>
		<ComposedObjects />
	</div>
</div>
