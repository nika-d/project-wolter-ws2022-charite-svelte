import type { SvelteComponentDev } from 'svelte/internal'

export default class ColumnConfig {
	valueFromRowGetterFunction: (x: unknown) => unknown
	displayName: string
	widthInPercentOfTableWidth: number
	cellComponent: typeof SvelteComponentDev
	sortFunction
	componentProps: string[]

	constructor(
		valueFromRowGetterFunction: (x: unknown) => unknown,
		displayName: string,
		componentProps: string[] = [],
		widthInPercentOfTableWidth: number = null,
		cellComponent = null,
		sortFunction = null
	) {
		this.valueFromRowGetterFunction = valueFromRowGetterFunction
		this.displayName = displayName
		this.widthInPercentOfTableWidth = widthInPercentOfTableWidth
		this.cellComponent = cellComponent
		this.sortFunction = sortFunction
		this.componentProps = componentProps
	}

	public static generateFromConfigConstants(configConstants): ColumnConfig[] {
		return configConstants.map(
			(config) =>
				new ColumnConfig(
					config.getDataFunction ?? ((row) => row),
					config.caption,
					config.componentProps,
					config.columnWidth,
					config.cellComponent
				)
		)
	}
}
