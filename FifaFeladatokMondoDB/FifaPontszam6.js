var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spolgar:4BQjBQ3dBFEiIQjU@cluster0.p8q4t.mongodb.net/test";
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={helyezes: 1};
    adatbazis.collection("Fifa").find({pontszam:{$gt:1600}},{projection:{_id:0,csapat: 1,pontszam:1}}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});
