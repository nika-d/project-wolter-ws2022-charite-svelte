import modelsFromJson from '../../src/lib/models/common/modelsFromJson'
import { TerminModelType } from '../../src/lib/models/dataTypes/TerminModelType'
import createStudienstruktur, {
	VeranstaltungenModel
} from '../../src/lib/models/StudienstrukturModels'
import { TermineModel } from '../../src/lib/models/TermineModel'
import { TerminModel } from '../../src/lib/models/TerminModel'
import einModulJson from './raw/studienstrukturJsons/2submodule_Gruppe13aModul15100Msm2Zeitsem20212.json'
import zweitesModulJson from './raw/studienstrukturJsons/2submodule_Gruppe13aModul15173Msm2Zeitsem20212.json'
import l from './raw/studienstrukturJsons/lehrformate.json'
import lehrformate from './raw/studienstrukturJsons/lehrformate.json'
import m from './raw/studienstrukturJsons/module.json'
import studiengaenge from './raw/studienstrukturJsons/studiengaenge.json'
import s from './raw/studienstrukturJsons/submodule.json'
import terminJson from './raw/studienstrukturJsons/termin_20211-123.json'
import t from './raw/studienstrukturJsons/termine_eineModulwocheMSM2_gruppe13a.json'

import v from './raw/studienstrukturJsons/veranstaltungen_in_submodul_1513703.json'

const termineJSONZweiModuleEineWocheEineGruppe = einModulJson.termine.concat(
		zweitesModulJson.termine
	),
	studienstrukturJSONZweiModuleEineWocheEineGruppe = {
		studiengaenge: studiengaenge,
		module: einModulJson.module.concat(zweitesModulJson.module),
		submodule: einModulJson.submodule.concat(zweitesModulJson.submodule),
		veranstaltungen: einModulJson.veranstaltungen.concat(zweitesModulJson.veranstaltungen),
		lehrformate: lehrformate
	},
	studienstrukturJSONEinzelnerTermin = {
		veranstaltungen: [v[0]],
		submodule: [s[0]],
		module: [m[0]],
		studiengaenge: studiengaenge,
		lehrformate: [l[280]]
	},
	json = {
		studienstruktur: {
			studiengaenge: studiengaenge,
			module: [m[0]],
			submodule: [s[0]],
			veranstaltungen: v,
			lehrformate: l
		},
		termine: t
	}

export function createEmptyVeranstaltungenModel(): VeranstaltungenModel {
	return createStudienstruktur(new TermineModel([]), {}).veranstaltungenModel
}

export function createVeranstaltungenModelEinzelnerTermin(
	terminModel: TerminModel
): VeranstaltungenModel {
	return createStudienstruktur(new TermineModel([terminModel]), studienstrukturJSONEinzelnerTermin)
		.veranstaltungenModel
}

export function createVeranstaltungenModelZweiModuleEineWocheEineGruppe(): VeranstaltungenModel {
	const { veranstaltungenModel } = createStudienstruktur(
		createTermineModelZweiModuleEineWocheEineGruppe(),
		studienstrukturJSONZweiModuleEineWocheEineGruppe
	)
	return veranstaltungenModel
}

export function createTerminModel(): TerminModel {
	return new TerminModel(new TerminModelType(terminJson[0]))
}

export function createTermineModelZweiModuleEineWocheEineGruppe() {
	return new TermineModel(
		modelsFromJson(termineJSONZweiModuleEineWocheEineGruppe, TerminModelType, TerminModel)
	)
}

export function createModelsEineModulWocheGruppe13a() {
	const termineModel = new TermineModel(modelsFromJson(json.termine, TerminModelType, TerminModel))
	return {
		termineModel,
		...createStudienstruktur(termineModel, json.studienstruktur)
	}
}
