import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsSuitHeart } from 'react-icons/bs';
import { getrecipe } from '../../Redux/Actions/recipeAction';
import { favorite } from '../../Redux/Actions/authAction';
import '../../Style/RecipeCard.css';

function RecipeCard({ recipe }) {
	const user = useSelector((state) => state.authReducer.user);
	const [likes, setLikes] = useState(user.likes.length);
	const [isLiked, setIsLiked] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		setIsLiked(user.likes.includes(user._id));
	}, []);

	const favoriteHandler = () => {
		dispatch(favorite(user._id));
		setLikes(isLiked ? likes - 1 : likes + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className='card-container'>
			<div className='card u-clearfix'>
				<div className='card-body'>
					<span className='card-author subtle'>{recipe.category}</span>
					<h2 className='card-title'>{recipe.name}</h2>
					<h5 className='card-title'>{recipe.cuisine}</h5>
					<span className='card-description subtle'>{recipe.notes}</span>
					<Link to={`/Recipe/${recipe._id}`}>
						<button
							style={{ border: 'none', background: 'none' }}
							className='card-read'
							onClick={() => dispatch(getrecipe(recipe._id))}
						>
							Let's Cook!
						</button>
					</Link>
					<span
						className='card-tag card-heart subtle'
						onClick={favoriteHandler}
					>
						{' '}
						{isLiked ? (
							<BsSuitHeart style={{ color: 'red' }} />
						) : (
							<BsSuitHeart />
						)}
						{likes}
					</span>
				</div>
				<img src={recipe.image} alt={recipe.name} className='card-media' />
			</div>
			<div className='card-shadow' />
		</div>
	);
}

export default RecipeCard;
