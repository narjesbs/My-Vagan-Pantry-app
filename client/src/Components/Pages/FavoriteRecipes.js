import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import RecipeCard from './RecipeCard';

function FavoriteRecipes() {
	const user = useSelector((state) => state.authReducer.user);
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
						.filter((item) => item._id === user.likes.values())
						.map((recipe) => (
							<RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
						))}
				</>
			)}
		</>
	);
}

export default FavoriteRecipes;
