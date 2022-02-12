import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getrecipes, togglefalse } from '../../Redux/Actions/recipeAction';
import { getUsers } from '../../Redux/Actions/userAction';
import '../../Style/Sidebar.css';

function SidebarAd() {
	const dispatch = useDispatch();
	return (
		<div className='sidebar'>
			<Link to='/UsersList'>
				<button
					className='active'
					href='#home'
					onClick={() => dispatch(getUsers())}
				>
					List of users
				</button>
			</Link>
			<div className='dropdown'>
				<button className='dropbtn'>Manage Recipes</button>
				<div className='dropdown-content'>
					<Link to='/RecipesList'>
						<button onClick={() => dispatch(getrecipes())}>
							List of recipes
						</button>
					</Link>
					<Link to='/NewRecipe' onClick={() => dispatch(togglefalse())}>
						<button>New Recipe</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SidebarAd;
