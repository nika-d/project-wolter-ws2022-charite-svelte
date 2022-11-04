import { ModelsByIdStore } from '../../src/lib/models/common/ModelsByIdStore'
import RaeumeModel from '../../src/lib/models/RaeumeModel'
import RaumModel from '../../src/lib/models/RaumModel'
import RaumModelType from '../../src/lib/models/dataTypes/RaumModelType'
import raeume from './raw/raeume.json'

export function createRaeumeModel(): RaeumeModel {
	return ModelsByIdStore.fromJson(raeume, RaumModelType, RaumModel, RaeumeModel)
}
