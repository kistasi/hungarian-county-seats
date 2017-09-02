function getHungarianCountySeat(county) {
	const counties = {
		'Bács-Kiskun': 'Kecskemét',
		'Baranya': 'Pécs',
		'Békés': 'Békéscsaba',
		'Borsod-Abaúj-Zemplén': 'Miskolc',
		'Csongrád': 'Szeged',
		'Fejér': 'Székesfehérvár',
		'Győr-Moson-Sopron': 'Győr',
		'Hajdú-Bihar': 'Debrecen',
		'Heves': 'Eger',
		'Jász-Nagykun-Szolnok': 'Szolnok',
		'Komárom-Esztergom': 'Tatabánya',
		'Nógrád': 'Salgótarján',
		'Pest': 'Budapest',
		'Szabolcs-Szatmár-Bereg': 'Nyíregyháza',
		'Szabolcs-Szatmár-Bereg': 'Nyíregyháza',
		'Tolna': 'Szekszárd',
		'Vas': 'Szombathely',
		'Veszprém': 'Veszprém',
		'Zala': 'Zalaegerszeg'
	}

	return counties[county]
}

module.exports.hungarianCountySeats = getHungarianCountySeat
