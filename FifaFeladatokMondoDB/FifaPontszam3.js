var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spolgar:4BQjBQ3dBFEiIQjU@cluster0.p8q4t.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={pontszam: -1};
    //1 esetén a sorrend növekvő ASCENDING
    //-1 esetén a sorrend csökkenő DESCENDING
    //Üres sort() esetén az alapértelmezett feltöltési sorrendet kapjuk vissza
    adatbazis.collection("Fifa").find().sort(rendezesBeallitasai).toArray( function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
})