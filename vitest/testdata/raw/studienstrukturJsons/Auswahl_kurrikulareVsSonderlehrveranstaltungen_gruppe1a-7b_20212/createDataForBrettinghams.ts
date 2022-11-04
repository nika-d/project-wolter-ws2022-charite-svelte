import personen from '../../fakePersonen.json'
import einrichtungen from '../../einrichtungen.json'
import lehrformate from '../lehrformate.json'
import studienstruktur from './studienstruktur.json'
import termine from './termine.json'
import ZeitSpanne from '../../../../../src/lib/models/common/ZeitSpanne'
import { verkuerze } from '../../../../../src/lib/models/dataTypes/Einrichtung/verkuerze'

/*
 * Curriculum
 * Gruppe
 * Ort
 * Treffpunkt
 * Termin
 * Lehrende:n
 * Einrichtung
 * */

const termineInBrettinghamsFormat = []

termine.forEach((termingruppe1) => {
	console.log(termingruppe1.info)
	termingruppe1.termine.forEach((termingruppe2) => {
		console.log(termingruppe2.info)
		termingruppe2.termine.forEach((termin) => {
			const veranstaltung = studienstruktur.veranstaltungen.find(
					(v) => v.id == termin.veranstaltungsId
				),
				modul = studienstruktur.module.find((m) => m.id === veranstaltung.modulId),
				fachsemester = modul.fachsemester, // achtung! das fachsemester stimmt irgendwie nicht immer!
				lehrformat = lehrformate.find((l) => l.id == veranstaltung.lehrformatId).oberLehrformat

			const curriculum = fachsemester + '. FS, ' + lehrformat + ' \n' + veranstaltung.langTitel

			const zeit = new ZeitSpanne(termin.start, termin.ende)

			const lehrendeliste = []

			function person(lehrTaetigkeit) {
				return personen.find((p) => p.id == lehrTaetigkeit.personId)
			}

			function einrichtung(lehrTaetigkeit) {
				return einrichtungen.einrichtungen.find((e) => e.id == lehrTaetigkeit.einrichtungsId)
			}

			termin.lehrTaetigkeiten.forEach((lehrTaetigkeit) =>
				lehrendeliste.push({
					'Lehrende:n': person(lehrTaetigkeit).nachname + ', ' + person(lehrTaetigkeit).vorname,
					Einrichtung: verkuerze(einrichtung(lehrTaetigkeit).bezeichnungLang)
				})
			)

			termineInBrettinghamsFormat.push({
				Curriculum: curriculum,
				Gruppe: termin.gruppenbezeichnung,
				Ort: termin.raumId,
				Termin: zeit.toString(),
				lehrendeliste: lehrendeliste
			})
		})
	})
})
console.log(JSON.stringify(termineInBrettinghamsFormat))
