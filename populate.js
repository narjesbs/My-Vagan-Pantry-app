require('dotenv').config();

const connectDb = require('./Config/connectDb');
const Recipe = require('./Models/Recipe');
const Pantry = require('./Models/Pantry');

const jsonRecipes = require('./Recipes.json');
const jsonPantry = require('./Pantry.json');

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		await Recipe.deleteMany();
		await Pantry.deleteMany();
		await Recipe.create(jsonRecipes);
		await Pantry.create(jsonPantry);
		console.log('Success!');
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
start();
