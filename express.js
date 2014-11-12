var express = require('express');
var cons    = require('consolidate');
var app     = express();

//setting the view engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
//where to look for
app.set('views', __dirname + "/views");

app.get('/', function (req, res){
	res.render('index', { name : "Andres"});
});

app.get('*', function (req, res){
	res.send("Not Found!");
});
app.listen(8080);
console.log("express server on 8000");