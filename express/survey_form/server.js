var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.use(session({secret: 'goodforyou'})); 

app.get("/", function(req, res){
	res.render("index");
})

app.post("/result", function(req, res){
	req.session.results = req.body;
	res.redirect("/result")
})

app.get("/result", function(req, res){
	results = req.session.results;
	res.render('result', {results: results});
})

app.get("style.css", function(req, res){
	console.log("Do we get into this route?");
	res.render("/static/style.css");
})

PORT = 8000;
app.listen(8000, function(){
	console.log("Listening on port " + PORT);
})