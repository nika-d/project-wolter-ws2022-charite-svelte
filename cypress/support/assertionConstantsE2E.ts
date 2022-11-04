import fakePersonen from '../../vitest/testdata/raw/fakePersonen.json'
import testdata2submodule from '../../vitest/testdata/raw/studienstrukturJsons/2submodule_Gruppe13aModul15100Msm2Zeitsem20212.json'
import { tableRowsData } from '../../src/routes/Components/Table/tableRowsData'

export default {
	ALL_ROWS_COUNT: 12,

	LEHRENDENEINTRAGUNG_TABELLE_INDEX_DER_LEHRENDEN_SPALTE: 5,

	// Termin A id (just to find testdata quicker):  20212-1313-1._FS_13a-14a-1
	// Ticket for how to deal with testdata in e2e tests: https://llp-op.charite.de/work_packages/4746
	TERMIN_A_LEHRTAETIGKEIT_FULL_NAME: fakePersonen[1].nachname + ', ' + fakePersonen[1].vorname,
	TERMIN_A_LEHRTAETIGKEIT_EMAIL: fakePersonen[1].email,
	TERMIN_A_FILTER_LEHRTAETIGKEIT_FULL_NAME:
		fakePersonen[2].nachname + ', ' + fakePersonen[2].vorname,
	TERMIN_A_FILTER_LEHRTAETIGKEIT_EMAIL: fakePersonen[2].email,
	TERMIN_A_INDEX_IN_TERMINE_TABELLE: 0,
	TERMIN_A_LEHRENDER_FULLNAME_NACH_AENDERUNG:
		fakePersonen[0].nachname + ', ' + fakePersonen[0].vorname,

	TERMIN_B: {
		INDEX_IN_TERMINE_TABELLE: 1,
		LEHRTAETIGKEIT_FULL_NAME: fakePersonen[1].nachname + ', ' + fakePersonen[1].vorname
	},

	TERMIN_C: {
		testdata: testdata2submodule.termine[2],
		INDEX_IN_TERMINE_TABELLE: 2
	},

	DISABLED_ATTRIBUTE: 'disabled',

	VORLESUNG_2: tableRowsData[2].veranstaltung,
	SOME_NAME: 'some name',
	OTHER_NAME: 'other name'
}
