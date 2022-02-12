const express = require('express');
const { Favorite, allFavorites } = require('../Controllers/FavRecipe');
const FavRecipeRoute = express.Router();

// method put
// req.params
// req.body
// /:id/Favorite
FavRecipeRoute.put('/:id/Favorite', Favorite);

FavRecipeRoute.get('/allFavorites', allFavorites);

module.exports = FavRecipeRoute;
