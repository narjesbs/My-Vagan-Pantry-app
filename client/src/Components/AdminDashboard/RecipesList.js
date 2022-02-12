import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RecipesCard from './RecipesCard';
import Loader from '../Pages/Loader';
import '../../Style/AdminPages.css';

function RecipesList() {
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
		<main>
			<section className='recipeCont'>
				<h3> You have {recipes.length} Recipes</h3>
				{loading ? (
					<Loader />
				) : (
					recipes.map((recipe) => (
						<RecipesCard recipe={recipe} key={recipe._id} />
					))
				)}
			</section>
		</main>
	);
}

export default RecipesList;
