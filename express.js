var express     = require('express');
var app         = express();
var cons        = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var Server      = require('mongodb').Server;
var logger      = require('./lib/logger/logger.js');


//setting the view engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
//where to look for
app.set('views', __dirname + "/views");


//DB 
// sync call
// var mongoclient = new MongoClient(
// 	new Server('localhost', 27017, {'native_parser': true}));
// var db = mongoclient.db('course');

app.route('/:name')
	.all( function (req, res, next){
		logger.info(req.method, req.path, req.body);
		// res.set('Content-Type', 'application/json');
		next();
	})
	.get(function (req, res){
		// db.collection('hello_mongo_express').findOne({}, function (err, doc){
		// 	if (err) {
		// 		throw err;
		// 		console.log("Kwan error"); 
		// 	};
		// 	res.render('index', doc);	
		// });
		var name = req.params.name;
		var getV1 = req.query.getV1;
		var getV2 = req.query.getV2;
		logger.info(req.query);
		res
		.render('index', {name:name, getV1:getV1, getV2:getV2});
	});

app.route('*')	
	.get(function (req, res){
		res
		.send("Not Found!");
	});

// mongoclient.open(function (err, mongoclient){
// 	if (err) {
// 		throw err;
// 		console.log("Kwan error"); 
// 	};
	app.listen(4000);
	logger.info("express server on 3000");	
// });