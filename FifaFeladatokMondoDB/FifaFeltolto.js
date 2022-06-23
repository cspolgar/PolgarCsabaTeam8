fifaAdatok = [
 "Anglia;4;0;1662",
"Argentína;10;0;1614",
"Belgium;1;0;1752",
"Brazília;3;-1;1719",
"Chile;17;-3;1576",
"Dánia;14;-1;1584",
"Franciaország;2;1;1725",
"Hollandia;13;3;1586",
"Horvátország;8;-1;1625",
"Kolumbia;9;-1;1622",
"Mexikó;12;0;1603",
"Németország;16;-1;1580",
"Olaszország;15;1;1583",
"Peru;19;0;1551",
"Portugália;5;1;1643",
"Spanyolország;7;2;1631",
"Svájc;11;0;1604",
"Svédország;18;0;1560",
"Szenegál;20;0;1546",
"Uruguay;6;-1;1639",
  ];

  class Fifa {
	constructor(csapat, helyezes, valtozas, pontszam) {
		this.csapat = csapat;
		this.helyezes = helyezes;
		this.valtozas = valtozas;
		this.pontszam = pontszam;

	}
}


  function ObjektumFeltolto(feltoltendoElem)
  {
    const beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
      let daraboltSor= feltoltendoElem[i].split(";");
      const fifaElem= new Fifa(daraboltSor[0], Number(daraboltSor[1]), Number(daraboltSor[2]), Number(daraboltSor[3]));
      beolvasottAdatok.push(fifaElem);
    }
    return beolvasottAdatok;
  }
  FifaInformacio = ObjektumFeltolto(fifaAdatok);


  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spolgar:4BQjBQ3dBFEiIQjU@cluster0.p8q4t.mongodb.net/test";
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("mydb");
    var ujAdatok = FifaInformacio;
    adatbazis.collection("Fifa").insertMany(ujAdatok, function (err, res){
        if(err) throw err;
        console.log("Új adatok feltöltve!");
        db.close();
    });
});