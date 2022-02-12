const mongoose = require('mongoose');

const PantrySchema = new mongoose.Schema({
	image: { type: String, required: true  },
	name: { type: String, required: true },
});

module.exports = mongoose.model('Pantry', PantrySchema);