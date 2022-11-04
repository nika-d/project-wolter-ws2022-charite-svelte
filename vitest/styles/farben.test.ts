import { beforeEach, describe, it } from 'vitest'
//import * as fs from 'fs'
import sass from 'sass'

describe('Colors', function () {
	const toCheck = []

	beforeEach(() => {
		const result = sass.compile('./src/lib/styles/charite.scss')
		let counter = 1
		result.css.split(/\r?\n/).forEach((line) => {
			const lineWithoutSpace = line.replace(/\s/g, '')
			if (lineWithoutSpace.includes('rgb:') || lineWithoutSpace.includes('#'))
				toCheck.push(counter + ': ' + lineWithoutSpace)
			counter++
		})

		//fs.writeFile('./src/lib/styles/output.css', result.css, (e)=>{console.log(e)})
	})

	it('only allowed colors should appear in transpiled css', function () {
		const allowed = [
				'0046aa',
				'4c7dc3',
				'E0E8F4',

				'222629',
				'56595c',
				'A0A5A9',
				'dadcde',
				'f6f7f7',

				'f8b704',
				'fef8e6',
				'f44336',
				'feeceb',
				'ff9800',
				'fff5e6',
				'4caf50',
				'edf7ee',

				'fff',

				'--bs-btn-focus-shadow-rgb:38,98,183;' // Sonderfall
				// .btn-link bringt falsche farbe rein, kann aber nicht überschrieben werden,
				// weil es als variable innerhalb einer Klasse definiert ist in
				// node_modules/bootstrap/scss/_buttons.scss :
				//--#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix(color-contrast($primary), $primary, 15%))};
				// Dadurch können weder @use noch @import die deklaration der Variablen verhindern.
				// Vielleicht geht es irgendwann bei einem Bootstrap-Update.
				// Wir haben deswegen kein Issue bei bootstrap aufgemacht.
			],
			allowedCount = allowed.length

		for (let i = 0; i < allowedCount - 1; i++) {
			allowed.push(hexToRgb(allowed[i]))
		}

		const wrong = []

		toCheck.forEach((value) => {
			const hasAllowedValue = allowed.reduce(
				(allowed, current) => allowed || value.toLowerCase().includes(current.toLowerCase()),
				false
			)
			if (!hasAllowedValue) wrong.push(value)
		})

		console.log(wrong)

		expect(wrong.length).toEqual(0)
	})
})

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b
	})

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16)
		: null
}
