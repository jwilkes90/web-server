var express = require('express'); 
var app = express(); //create express app
var PORT = 3000;

var  middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.orignalUrl);
		next();
	}
};

//app.use(middleware.requireAuthentication); //important to put this above other routes so that the ones below run

app.use(middleware.logger);

// app.get('/', function (req, res) { //request holds url, JSON, cookies, data etc. Response is what we send back.
// 	res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) { //request holds url, JSON, cookies, data etc. Response is what we send back.
	res.send('About us...'); 
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express Server started on port ' + PORT);
}); //reserve a port to listen (3000 is usually not used by PC)

//adding comment to test git