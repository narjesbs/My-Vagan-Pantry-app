import React from 'react';
import '../../Style/VerticalMenu.css';

function VerticalMenu({ filterItems, cuisines }) {
	return (
		<div className='vertical-menu'>
			{cuisines.map((cuisine, index) => (
				<span className='menu' key={index} onClick={() => filterItems(cuisine)}>
					{cuisine}
				</span>
			))}
		</div>
	);
}

export default VerticalMenu;
