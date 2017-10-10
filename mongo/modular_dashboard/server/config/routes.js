var mongoose = require('mongoose');
var Otter = mongoose.model('Otter');
var otters = require('../controllers/otters.js')
// within the anonymous function, write your routes
// as you would in a single server.js file
module.exports = function(app){
	
	app.get("/", function(req, res){
		otters.showAll(req, res);
	})

	app.get("/otters/new/", function(req, res){
		res.render("new");
	})

	app.post("/otters/new", function(req, res){
		otters.new(req, res);
	})

	app.get("/otters/:id", function(req, res){
		otters.showOne(req, res);
	})

	app.get("/otters/edit/:id", function(req, res){
		otters.editForm(req, res);
	})

	app.post("/otters/:id", function(req, res){
		otters.update(req, res);
	})

	app.post("/otters/delete/:id", function(req, res){
		otters.delete(req, res);
	})
}