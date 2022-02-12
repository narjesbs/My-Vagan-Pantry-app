import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import RecipeCard from './RecipeCard';

function SearchedRecipe({ searched }) {
	const recipes = useSelector((state) => state.recipeReducer.recipes);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (recipes) {
			setLoading(false);
		} else {
			console.log('wait still loading...');
		}
	}, []);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					{recipes
						.filter((recipe) => recipe.pantryItems.includes(searched))
						.map((recipe) => (
							<RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>
						))}
				</>
			)}
		</>
	);
}

export default SearchedRecipe;
