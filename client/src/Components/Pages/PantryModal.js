import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { getpantryitems, addPantry } from '../../Redux/Actions/pantryAction';
import { getrecipes } from '../../Redux/Actions/recipeAction';
import RecipeCard from './RecipeCard';

function PantryModal({ setSearched }) {
	const pantryItems = useSelector((state) => state.pantryReducer.pantryItems);
	const recipes = useSelector((state) => state.recipeReducer.recipes);
	const [show, setShow] = useState(false);
	const [pantryItem, setPantryItem] = useState('');
	const dispatch = useDispatch();
	console.log(pantryItem);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const showPantryItems = () => {
		dispatch(getpantryitems());
	};
	useEffect(() => {
		dispatch(getrecipes());
	}, []);

	const Find = (pattern, words) => {
		const filtered = recipes.filter((recipe) =>
			recipe.pantryItems.includes(pantryItem)
		);
		setSearched(filtered);
		console.log(filtered);
	};

	return (
		<>
			<Button
				style={{
					border: 'transparent',
					textTransform: 'capitalize',
					background: 'none',
					boxShadow: 'none',
					color: 'black',
				}}
				onClick={() => {
					handleShow();
					showPantryItems();
				}}
			>
				Pantry
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Tell us what you have in your Pantry</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{pantryItems.map((pantryItem) => (
						<div>
							<input
								type='checkBox'
								value={pantryItem.name}
								onChange={(e) => setPantryItem(e.target.value)}
							/>
							<label>{pantryItem.name}</label>
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Link to='/Profile'>
						<Button
							variant='secondary'
							onClick={() => {
								handleClose();
							}}
						>
							Close
						</Button>
					</Link>
					<Link to='/Search'>
						<Button
							variant='primary'
							onClick={() => {
								Find(pantryItem, recipes);
							}}
						>
							Search
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default PantryModal;
