var express = require('express'); 
var app = express(); //create express app
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js')

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) { //request holds url, JSON, cookies, data etc. Response is what we send back.
	res.send('About us...'); 
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express Server started on port ' + PORT);
});

//ssh key - unique identifier
//github view our code and collaborate with others
//heroku - deploy our app so its visible to web
