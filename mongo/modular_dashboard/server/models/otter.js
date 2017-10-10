var mongoose = require('mongoose');

var OtterSchema = new mongoose.Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true}
}, {timestamps: true})

mongoose.model('Otter', OtterSchema);