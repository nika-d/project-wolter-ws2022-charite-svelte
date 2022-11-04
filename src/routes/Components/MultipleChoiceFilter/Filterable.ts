import { InnerObject } from './InnerObject'

export class Filterable {
	id: number
	innerObject: InnerObject

	constructor(id: number, innerObject: InnerObject) {
		this.id = id
		this.innerObject = innerObject
	}

	toString() {
		return this.id.toString() + ' - ' + this.innerObject
	}
}
