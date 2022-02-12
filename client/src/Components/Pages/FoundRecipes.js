import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

function FoundRecipes({ search }) {
	const recipes = useSelector((state) => state.recipeReducer.recipes);

	return (
		<div>
			{recipes
				.filter((recipe) =>
					recipe.name.toUpperCase().includes(search.toUpperCase().trim())
				)
				.map((recipe) => (
					<RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>
				))}
		</div>
	);
}

export default FoundRecipes;
