import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../Redux/Actions/authAction';
import Categories from './Pages/Categories';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Navigation from './Pages/Navigation';
import Sidebar from './Pages/Sidebar';

function Profile({ setSearched }) {
	const recipes = useSelector((state) => state.recipeReducer.recipes);

	const allCategories = [
		'all',
		...new Set(recipes.map((item) => item.category)),
	];

	const [recipeItems, setRecipeItems] = useState(recipes);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (recipes.category === 'all') {
			setRecipeItems(recipes);
			return;
		}
		const newItems = recipes.filter((item) => recipes.category === category);
		setRecipeItems(newItems);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getcurrent());
	}, []);

	return (
		<div>
			<Navigation></Navigation>
			<Sidebar setSearched={setSearched}></Sidebar>
			<div
				style={{ marginLeft: ' 200px', padding: '1px 16px', height: '1000px' }}
			>
				<Categories filterItems={filterItems} categories={categories} />
				<FavoriteRecipes />
			</div>
		</div>
	);
}

export default Profile;
