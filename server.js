const express = require('express');
const connectDb = require('./Config/connectDb');
const AuthRoute = require('./Routes/auth');
const RecipeRoute = require('./Routes/Recipe');
const PantryRoute = require('./Routes/Pantry');
const FavRecipeRoute = require('./Routes/FavRecipe');

require('dotenv').config();

const app = express();
connectDb();

app.use(express.json());
app.use('/api/auth', AuthRoute);
app.use('/api/recipe', RecipeRoute);
app.use('/api/pantry', PantryRoute);
app.use('/api/fav', FavRecipeRoute);

app.listen(process.env.port, () =>
	console.log(`server is running on port ${process.env.port}...`)
);
