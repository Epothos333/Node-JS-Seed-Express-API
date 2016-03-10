var express = require('express');
var app = express();

var lyricalGenius = require('./math.js')

app.get('/api/just', function(req, res) {
	res.send(lyricalGenius[[Math.floor(Math.random()*lyricalGenius.length)]]);
});

var server = app.listen(3000, function(){
	var host = server.address().address; // IP adress
	var port = server.address().port; // port number on address
	console.log("Example app listening to port " + port.toString());
});

app.use(express.static(__dirname + '/public'));