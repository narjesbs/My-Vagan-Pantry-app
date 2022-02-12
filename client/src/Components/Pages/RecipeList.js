import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RecipeCard from './RecipeCard';

function RecipeList({ recipeItems }) {
	return (
		<>
			<Carousel>
				{recipeItems.map((recipe) => (
					<Carousel.Item>
						<RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}

export default RecipeList;
