var mongoose = require('mongoose');
var Otter = mongoose.model('Otter');


module.exports = {
	showAll: function(req, res){
		Otter.find({}, function(err, otters){
			if(err){
				console.log(err);
			}
			else{
				res.render("index", {otters: otters});		
			}
		})
	},

	showOne: function(req, res){
		Otter.findById(req.params.id, function(err, otter){
			if(err){
				console.log(err);
			}
			else{
				res.render("otter", {otter:otter});
			}
		})
	},

	new: function(req, res){
		var otter = new Otter({name: req.body.name, age: req.body.age});
		otter.save(function(err){
			if(err){
				res.render("new", {errors: otter.errors});
			}
			else{
				res.redirect("/");
			}
		})

	},

	editForm: function(req, res){
		Otter.findById(req.params.id, function(err, otter){
			if(err){
				console.log(err);
			}
			else{
				res.render("edit", {otter:otter});
			}
		})
	},

	update: function(req, res){
		Otter.findById(req.params.id, function(err, otter){
			if(err){
				console.log(err);
				console.log("Some error handling...");
			}
			else{
				Otter.update({_id: otter._id}, {$set: {name: req.body.name, age: req.body.age}}, {upsert: true}, function(err){
					if(err){
						console.log(err);
						console.log("Getting an error here...");
					}
					else{
						res.redirect("/");
					}
				})
			}
		})
	},

	delete: function(req, res){
		Otter.findById(req.params.id, function(err, otter){
			if(err){
				console.log(err);
				res.render("edit", {otter: otter, errors: otter.errors})
			}
			else{
				Otter.remove({_id: otter._id}, function(err){
					if(err){
						console.log(err);
						console.log("Error on delete");
					}
					else{
						res.redirect("/");
					}
				})
			}
		})
	}
}