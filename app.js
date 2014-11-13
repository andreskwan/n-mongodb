var mongoClient = require('mongodb').MongoClient;
var http = require('http');
var document;

mongoClient.connect('mongodb://localhost:27017/test', function (err, db){
	if (err) throw err;
	db.collection('names').findOne({}, function (err, doc){
		console.dir(doc);
		document = doc;
		//close the db
		db.close;
	});
});
//si quiero usar el doc afuer que debo hacer?
var server = http.createServer(function (req, res) 
{
	//what to do when our server receives a request
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, World\n"+document.name);
});

//our server is ready to respond but first 
//should listen for incomming connections

server.listen(8000);
console.log("Server running on port 8000");

