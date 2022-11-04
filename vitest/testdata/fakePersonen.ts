import { PersonModelType } from '../../src/lib/models/dataTypes/PersonModelType'
import PersonenModel from '../../src/lib/models/PersonenModel'
import PersonModel from '../../src/lib/models/PersonModel'
import rawJson from './raw/fakePersonen.json'

function makePersonenModelsById(): Map<string, PersonModel> {
	const models = new Map<string, PersonModel>()
	rawJson.forEach((p) => models.set(p['id'], new PersonModel(new PersonModelType(p))))
	return models
}

export function createPersonenModelsById() {
	return makePersonenModelsById()
}

export function createPersonenModel() {
	return new PersonenModel(makePersonenModelsById())
}
