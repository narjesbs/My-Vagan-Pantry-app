const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	image: { type: String },
	name: { type: String, required: true },
	cuisine: { type: String, required: true },
	category: { type: String, required: true },
	pantryItems: [String],
	ingredients: [String],
	instructions: [String],
	notes: { type: String },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
