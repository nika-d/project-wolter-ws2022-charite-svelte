import { LehrTaetigkeitModel } from '../../src/lib/models/LehrTaetigkeitModel'
import { LehrTaetigkeitModelType } from '../../src/lib/models/dataTypes/LehrTaetigkeitModelType'
import { LehrTaetigkeitenModel } from '../../src/lib/models/LehrTaetigkeitenModel'
import json from './raw/studienstrukturJsons/termin_20211-123.json'

export const lehrTaetigkeitenJson = json[0].lehrTaetigkeiten

export function createLehrTaetigkeitModel(): LehrTaetigkeitModel {
	return new LehrTaetigkeitModel(new LehrTaetigkeitModelType(lehrTaetigkeitenJson[0]))
}

export function createLehrTaetigkeitenModel(): LehrTaetigkeitenModel {
	return new LehrTaetigkeitenModel(
		[
			new LehrTaetigkeitModel(new LehrTaetigkeitModelType(lehrTaetigkeitenJson[0])),
			new LehrTaetigkeitModel(new LehrTaetigkeitModelType(lehrTaetigkeitenJson[1])),
			new LehrTaetigkeitModel(new LehrTaetigkeitModelType(lehrTaetigkeitenJson[2]))
		],
		'20211-123'
	)
}
