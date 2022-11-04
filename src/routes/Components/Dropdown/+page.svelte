<script>
	import Dropdown from '$lib/uiComponents/Dropdown.svelte'
	import Checkbox from '$lib/uiComponents/Checkbox.svelte'

	let customSelectedItem
</script>

<div class="row h-100 justify-content-center align-content-center">
	<div class="col pt-3">
		<h5 class="pt-5">Einfaches Dropdown mit autoclose</h5>
		<Dropdown buttonText="Klick mich!" badgeText="los!" autoClose>
			<span slot="dropdown-items">
				<a class="dropdown-item" href="https://">Back to Components</a>
				<a class="dropdown-item" href="https://www.youtube.com/watch?v=zK1Wfv_te2Q">Cat content</a>
				<a class="dropdown-item" href="https://minesweeper.online/de/game/1321458011">
					Minesweeper online
				</a>
			</span>
		</Dropdown>
		<h5 class="pt-5">Dropdown-Beispiel mit kompliziertem Inhalt, hier Checkboxes</h5>
		<Dropdown buttonText="Zeig Checkboxes!">
			<span slot="dropdown-items">
				<button class="btn btn-sm btn-ghost" type="button">
					Ich bin ein ghost button (nicht auswählbar, aber klickbar).
				</button>
				<div class="dropdown-item">
					<Checkbox option="Default checkbox" />
				</div>
				<div class="dropdown-item">
					<Checkbox option="Checked checkbox" checked />
				</div>
			</span>
		</Dropdown>
		<h5 class="pt-5">Deaktiviertes Dropdown</h5>
		<Dropdown buttonText="Klick mich nicht!" badgeText="🥺" disabled>
			<span slot="dropdown-items">
				<a class="dropdown-item" href="https://">Back to Components</a>
				<a class="dropdown-item" href="https://www.youtube.com/watch?v=zK1Wfv_te2Q">Cat content</a>
				<a class="dropdown-item" href="https://minesweeper.online/de/game/1321458011">
					Minesweeper online
				</a>
			</span>
		</Dropdown>
	</div>
</div>
