<script>
	const inputValue = 'this is no placeholder',
		placeholder = 'Placeholder text'
</script>

<div class="row h-100 justify-content-center align-items-center">
	<div class="col-auto">
		<table>
			<tbody>
				<tr>
					<th scope="row">Default</th>
					<td>
						<input type="text" class="form-control" {placeholder} />
					</td>
				</tr>

				<tr>
					<th scope="row">Error</th>
					<td>
						<input type="text" class="form-control border border-danger" value={inputValue} />
					</td>
				</tr>

				<tr>
					<th scope="row">Disabled</th>
					<td>
						<input type="text" class="form-control" {placeholder} disabled />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
