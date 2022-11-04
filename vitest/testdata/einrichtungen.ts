import EinrichtungModelType from '../../src/lib/models/dataTypes/Einrichtung/EinrichtungModelType'
import EinrichtungModel from '../../src/lib/models/EinrichtungModel'
import EinrichtungenModel from '../../src/lib/models/EinrichtungenModel'

import rawJson from './raw/einrichtungen.json'

export function createEinrichtungenModelsById(): Map<string, EinrichtungModel> {
	const modelsById = new Map<string, EinrichtungModel>()
	rawJson.einrichtungen.forEach((p) =>
		modelsById.set(p.id.toString(), new EinrichtungModel(new EinrichtungModelType(p)))
	)

	return modelsById
}

export function createEinrichtungenModel() {
	return new EinrichtungenModel(createEinrichtungenModelsById())
}
