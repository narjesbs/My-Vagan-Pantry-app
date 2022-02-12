import React from 'react';
import { Link } from 'react-router-dom';
import PantryModal from '../Pages/PantryModal';
import '../../Style/Sidebar.css';

function Sidebar({setSearched}) {
	return (
		<div className='sidebar'>
			<Link to='/Profile' style={{ textDecoration: 'none' }}>
				<span className='element'>Profile</span>
			</Link>
			<PantryModal setSearched={setSearched}/>
			<Link to='/FavoriteRecipes' style={{ textDecoration: 'none' }}>
				<span className='element'>Favorite Recipes</span>
			</Link>
		</div>
	);
}

export default Sidebar;
