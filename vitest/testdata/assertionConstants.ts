import v from './raw/studienstrukturJsons/veranstaltungen_in_submodul_1513703.json'
import l from './raw/studienstrukturJsons/lehrformate.json'
import s from './raw/studienstrukturJsons/submodule.json'
import m from './raw/studienstrukturJsons/module.json'
import st from './raw/studienstrukturJsons/studiengaenge.json'
import t from './raw/studienstrukturJsons/termin_20211-123.json'
import t_v74476 from './raw/studienstrukturJsons/termine_zu_veranstaltung_74476.json'
import r from './raw/raeume.json'
import e from './raw/einrichtungen.json'
import p from './raw/fakePersonen.json'
import { verkuerze } from '../../src/lib/models/dataTypes/Einrichtung/verkuerze'

// Wenn die ganzen Testdaten mal wieder zu unübersichtlich wird, gerne ein Refactoring-Ticket machen, z.B. nach
// diesen patterns: https://blog.codeleak.pl/2014/06/test-data-builders-and-object-mother.html

export default {
	STUDIENGANG_A_ID: st[0].id, // 6
	STUDIENGANG_A_CODE: st[0].code, // MSM2

	MODUL_A_ID: m[0].id, // 15137
	MODUL_A_TITEL: m[0].titel, // Bewegung

	SUBMODUL_A_ID: s[0].id, // 1513703

	VERANSTALTUNG_A_ID: v[4].id, // 77603
	VERANSTALTUNG_A_KURZ_TITEL: v[4].kurzTitel, // Vorlesung
	VERANSTALTUNG_A_LANG_TITEL: v[4].langTitel, // "Ars longa - ossa brevia | Knochenarchitektur, -funktion und -fraktur"

	VERANSTALTUNG_B_ID: v[0].id, // 74476
	VERANSTALTUNG_B_OBER_LEHRFORMAT: l[280].oberLehrformat, // Untersuchungskurs

	LEHRFORMAT_A_OBER_LEHRFORMAT: l[289].oberLehrformat, // "Seminar"
	LEHRFORMAT_B_OBER_LEHRFORMAT: l[15].oberLehrformat, // "POL" (im Studien
	LEHRFORMAT_818_OBER_LEHRFORMAT: l[283].oberLehrformat, // "POL" (im MSM2)

	TERMIN_ID_20211_123: {
		ID: t[0].id, // 20211-123,
		TAG: new Date(t[0].start), // '2020-04-14'
		CAMPUS: t[0].campus, // 'CCM'
		GRUPPEN: t[0].gruppenbezeichnung, // '1a-4b'
		RAUM: t[0].raumId ? 'raum falsch' : '', // ''
		MODUL: m[0].titel, // 'Bewegung'
		VERANSTALTUNG_LANG_TITEL: v[0].langTitel // 'Wiederholung und Vertiefung Patientenuntersuchung: Thorax/ Lunge - Termin 10'
	},
	TERMIN_GRUPPE_1a_3b: t_v74476[2].gruppenbezeichnung, // "1a-3b"

	EINRICHTUNGEN_ANZAHL: e.einrichtungen.length,
	EINRICHTUNG_5_LABEL: verkuerze(e.einrichtungen[2].bezeichnungLang), // "CC01, I.f. Geschichte der Medizin und Ethik in der Medizin, CBF"
	EINRICHTUNG_120_LABEL: verkuerze(e.einrichtungen[110].bezeichnungLang), // "CC01 - Horst-Görtz Stiftungsinstitut f. Theorie, Geschichte und Ethik chinesischer Lebenswissenschaften - CCM"

	RAUM_3014: r[2].id, // '3014'

	PERSON_A_GUID: p[0].id, // 3RICDyet5hAwiobV92pylr2f8Sc=
	PERSON_A_NACHNAME: p[0].nachname, // Hermann
	PERSON_A_EMAIL: p[0].email, // paul.hermann@charite.de
	PERSON_B_GUID: p[12].id, // /K4Ysl4S4U9x4N7g+D/Vuw293iw=
	PERSON_B_EINRICHTUNG_IDS: p[12].einrichtungsIds, // ['5', '120']
	PERSON_B_NACHNAME: p[12].nachname, // Mustermann
	PERSON_B_FULL_NAME: p[12].nachname + ', ' + p[12].vorname, //Mustermann, Petra
	PERSON_B_EMAIL: p[12].email, //petra.mustermann@charite.de
	PERSON_C_GUID: p[14].id, // 00J2lj6tJ8APwu6cztcUq5hiPcg=
	PERSON_D_VORNAME: p[1].vorname, // Hansi
	PERSON_E_VOLLER_NAME: p[18].nachname + ', ' + p[18].vorname, // Lagewiese, Mark
	PERSON_F_VOLLER_NAME: p[15].nachname + ', ' + p[15].vorname, // Wilke, John P.
	PERSON_F_EINRICHTUNGS_IDS: p[15].einrichtungsIds // ['12', '15']
}
