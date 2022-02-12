const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	likes: { type: Array, default: [] },
	role: { type: String, enum: ['user', 'admin'], default: 'user' },
	pantryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pantry',
		required: true,
	},
	recipeId: {
		type: mongoose.Schema.Types.ObjectId,
		//ref: 'Recipe',
		//required: true,
	},
});

module.exports = mongoose.model('User', UserSchema);
