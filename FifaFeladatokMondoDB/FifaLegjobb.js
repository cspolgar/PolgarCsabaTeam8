var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spolgar:4BQjBQ3dBFEiIQjU@cluster0.p8q4t.mongodb.net/test";
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={helyezes: 1};
    adatbazis.collection("Fifa").find({helyezes:{$lt:4}}).sort(rendezesBeallitasai).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});


