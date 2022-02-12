import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	deleteRecipe,
	getrecipe,
	toggletrue,
} from '../../Redux/Actions/recipeAction';
import '../../Style/AdminPages.css';

function RecipesCard({ recipe }) {
	const dispatch = useDispatch();
	return (
		<Card className='recipe'>
			<Card.Img variant='top' src={recipe.image} />
			<Card.Body className='recipe-info'>
				<Card.Title>{recipe.name}</Card.Title>
				<Card.Title>{recipe.category}</Card.Title>
				<Card.Title>{recipe.cuisine}</Card.Title>
				<div className='btns'>
					<Button
						className='btn'
						onClick={() => dispatch(deleteRecipe(recipe._id))}
					>
						Delete Recipe
					</Button>
					<Link
						style={{ textDecoration: 'none' }}
						to={`/EditRecipe/${recipe._id}`}
					>
						<Button
							className='btn'
							onClick={() => {
								dispatch(toggletrue());
								dispatch(getrecipe(recipe._id));
							}}
						>
							Edit Recipe
						</Button>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
}

export default RecipesCard;
