var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname + "/static")));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

var counter = 0;

app.get("/", function (req, res) {
	//console.log(res);
	res.redirect("/main");
})

app.get("/main", function(req, res){
	counter += 1;
	//console.log(counter);
	res.render("main", {counter: counter});
})

app.get("style.css", function(req, res){
	console.log("Do we get into this route?");
	res.render("/static/style.css");
})

app.post("/plustwo", function(req, res){
	counter += 1;
	res.redirect("/");
})

app.post("/reset", function(req, res){
	counter = 0;
	res.redirect("/");
})

app.listen(8000, function(){
	console.log("listening on port 8000");
})