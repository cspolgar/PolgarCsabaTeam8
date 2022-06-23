var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spolgar:4BQjBQ3dBFEiIQjU@cluster0.p8q4t.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("Fifa").drop(function(err, res){
        if(err) throw err;
        console.log("A collection törlése sikerült!");
        db.close();
    });
});