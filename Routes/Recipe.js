const express = require('express');
const { isAuth } = require('../Middlewares/isAuth');
const { isAdmin } = require('../Middlewares/isAdmin');
const {
	AllRecipes,
	AddRecipe,
	GetRecipe,
	UpdateRecipe,
	DeleteRecipe,
} = require('../Controllers/Recipe');

const RecipeRoute = express.Router();

// method get
// /AllRecipes
RecipeRoute.get('/AllRecipes', AllRecipes);

// method post
// req.body
// /AddRecipe
RecipeRoute.post('/AddRecipe', AddRecipe);

// method get
// req.params
// /:id
RecipeRoute.get('/:id', GetRecipe);

// method put
// req.params
// req.body
// /UpdateRecipe/:id
RecipeRoute.put('/UpdateRecipe/:id', UpdateRecipe);

// method delete
// req.params
// /DeleteRecipe/:id
RecipeRoute.delete('/DeleteRecipe/:id', isAuth, isAdmin, DeleteRecipe);

module.exports = RecipeRoute;
