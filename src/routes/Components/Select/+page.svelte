<script lang="ts">
	let value
</script>

<div class="vh-100 d-flex align-items-center">
	<div class="row">
		<div class="col d-grid gap-3">
			<h3>Selects per HTML-select</h3>

			HTML-selects haben Beschränkungen, z.T. wegen schlechter Svelte-Umsetzung:
			<ul>
				<li>Automatisch aufklappen ist aufwändig zu programmieren, quasi unmöglich</li>
				<li>Um ein Element vorauszuwählen, muss es im Auswahl-Array an Platz 0 stehen</li>
				<li>multiple funktioniert nicht zusammen mit bind:value</li>
				<li>disabled select liefert nur value null</li>
			</ul>

			<div>
				<select bind:value class="form-select" aria-label="Select">
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>

				Selected value is {value}.
			</div>

			<div>
				<label
					>Disabled select:
					<select class="form-select" aria-label="Select" disabled>
						<option>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</label>
			</div>
		</div>
	</div>
</div>
