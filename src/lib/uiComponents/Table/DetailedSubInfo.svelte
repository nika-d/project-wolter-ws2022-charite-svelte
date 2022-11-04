<script lang="ts">
	export let heading: string
	export let info: string

	let _info
	$: _info = info ? info : '_'
</script>

<div class="container-fluid">
	<div class="row p-0 header">{heading}</div>
	<div class="row p-0 info">{_info}</div>
</div>

<style lang="scss">
	.header {
		font-size: 11px;
		line-height: 16px;
	}

	.info {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
</style>
