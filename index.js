module.exports = function(county) {
	const counties = {
		'Bács-Kiskun': 'Kecskemét',
		'Baranya': 'Pécs',
		'Békés': 'Békéscsaba',
		'Borsod-Abaúj-Zemplén': 'Miskolc',
		'Csongrád-Csanád': 'Szeged',
		'Fejér': 'Székesfehérvár',
		'Győr-Moson-Sopron': 'Győr',
		'Hajdú-Bihar': 'Debrecen',
		'Heves': 'Eger',
		'Jász-Nagykun-Szolnok': 'Szolnok',
		'Komárom-Esztergom': 'Tatabánya',
		'Nógrád': 'Salgótarján',
		'Pest': 'Budapest',
		'Somogy': 'Kaposvár',
		'Szabolcs-Szatmár-Bereg': 'Nyíregyháza',
		'Tolna': 'Szekszárd',
		'Vas': 'Szombathely',
		'Veszprém': 'Veszprém',
		'Zala': 'Zalaegerszeg'
	}

	return counties[county]
}
