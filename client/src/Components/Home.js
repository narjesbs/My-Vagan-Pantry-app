import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getrecipes } from '../Redux/Actions/recipeAction';
import Navigation from './Pages/Navigation';
import RecipeList from './Pages/RecipeList';
import VerticalMenu from './Pages/VerticalMenu';

function Home({ setSearch }) {
	const recipes = useSelector((state) => state.recipeReducer.recipes);

	const allCuisines = ['All', ...new Set(recipes.map((item) => item.cuisine))];

	const [recipeItems, setRecipeItems] = useState(recipes);
	const [cuisines, setCuisines] = useState(allCuisines);

	const filterItems = (cuisine) => {
		if (recipes.cuisine === 'All') {
			return;
		}
		const newItems = recipes.filter((item) => item.cuisine === cuisine);
		console.log(newItems);
		setRecipeItems(newItems);
	};

	return (
		<>
			<Navigation setSearch={setSearch} />
			<div style={{ display: 'flex', flexWrap: 'nowrap' }}>
				<VerticalMenu filterItems={filterItems} cuisines={cuisines} />
				<div
					style={{ marginLeft: '200px', padding: '1px 16px', height: '500px' }}
				>
					<RecipeList recipeItems={recipeItems} />
					<iframe
						width='853'
						height='480'
						src='https://www.youtube.com/embed/i5T6Fnbq34c'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
}

export default Home;
