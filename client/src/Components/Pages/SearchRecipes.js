import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';


function SearchRecipes({setSearch}) {
	
	return (
		<Form className='d-flex' style={{ textAlign: 'center' }}>
			<FormControl
				type='search'
				placeholder='Search'
				className='me-2'
				aria-label='Search'
				style={{ width: '400px', display: 'inline-block' }}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Link to='/FoundRecipes'>
				<Button
					variant='outline-success'	
				>
					Search
				</Button>
				</Link>
		</Form>
	);
}

export default SearchRecipes;
