import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Pages/Navigation';
import { MdOutlineFoodBank } from 'react-icons/md';
import Loader from './Pages/Loader';
import '../Style/Recipe.css';

function Recipe() {
	const recipe = useSelector((state) => state.recipeReducer.recipe);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (recipe) {
			setLoading(false);
		} else {
			console.log('wait still loading...');
		}
	}, []);
	return (
		<>
			<Navigation></Navigation>
			{loading ? (
				<Loader />
			) : (
				<main className='page'>
					<section className='recipe-page'>
						<div className='container-recipe-img'>
							<img
								src={recipe.image}
								alt={recipe.name}
								className='recipe-img'
							/>
						</div>
						<div className='recipe-info'>
							<h2 className='recipe-name'>{recipe.name}</h2>
							<div className='recipe-info-d'>
								<h5>{recipe.cuisine}</h5>
								<h4>
									<MdOutlineFoodBank />
								</h4>
								<h5>{recipe.category}</h5>
							</div>
						</div>
					</section>
					<div className='recipe-content'>
						<div className='recipe-instructions'>
							<h1>ingredients</h1>
							<p
								style={{
									marginTop: '6rem',
									textAlign: 'start',
									marginLeft: '1px',
									paddingLeft: '1px',
								}}
							>
								{recipe.ingredients}
							</p>
						</div>
						<div className='recipe-ingredients'>
							<h1>instructions</h1>
							<p
								style={{
									marginTop: '0rem',
									textAlign: 'center',
									marginLeft: '30px',
								}}
							>
								{recipe.instructions}
							</p>
						</div>
					</div>
				</main>
			)}
		</>
	);
}

export default Recipe;
