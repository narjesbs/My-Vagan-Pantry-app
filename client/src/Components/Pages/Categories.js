import React from 'react';
import '../../Style/Categories.css';

function Categories({ filterItems, categories }) {
	return (
		<div className='btn-container'>
			{categories.map((category, index) => {
				return (
					<button
						type='button'
						className='filter-btn'
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
}

export default Categories;
