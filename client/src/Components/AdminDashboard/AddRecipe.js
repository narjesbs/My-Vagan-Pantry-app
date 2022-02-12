import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addRecipe, editRecipe } from '../../Redux/Actions/recipeAction';
import '../../Style/AdminPages.css';

function AddRecipe() {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [cuisine, setCuisine] = useState('');
	const [category, setCategory] = useState('');
	const [pantryItems, setPantryItems] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [instructions, setInstructions] = useState('');
	const [notes, setNotes] = useState('');

	const dispatch = useDispatch();
	const Navigate = useNavigate();

	const recipe = useSelector((state) => state.recipeReducer.recipe);
	const edit = useSelector((state) => state.recipeReducer.edit);

	useEffect(() => {
		if (edit) {
			setImage(recipe.image);
			setName(recipe.name);
			setCuisine(recipe.cuisine);
			setCategory(recipe.category);
			setPantryItems(recipe.pantryItems);
			setIngredients(recipe.ingredients);
			setInstructions(recipe.instructions);
			setNotes(recipe.notes);
		} else {
			setImage('');
			setName('');
			setCuisine('');
			setCategory('');
			setPantryItems('');
			setIngredients('');
			setInstructions('');
			setNotes('');
		}
	}, []);

	return (
		<main>
			<Form className='recipeCont'>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label> Recipe Image</Form.Label>
					<Form.Control
						onChange={(e) => setImage(e.target.value)}
						value={image}
						type='text'
						placeholder='Enter Recipe image'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label> Recipe Name</Form.Label>
					<Form.Control
						onChange={(e) => setName(e.target.value)}
						value={name}
						type='text'
						placeholder='Enter Recipe name'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label> Recipe Cuisine</Form.Label>
					<Form.Control
						onChange={(e) => setCuisine(e.target.value)}
						value={cuisine}
						type='text'
						placeholder='Enter Recipe cuisine'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicAge'>
					<Form.Label> Recipe Category</Form.Label>
					<Form.Control
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						type='text'
						placeholder='Enter Recipe category'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicFF'>
					<Form.Label> Recipe PantryItems</Form.Label>
					<Form.Control
						onChange={(e) => setPantryItems(e.target.value)}
						value={pantryItems}
						as='textarea'
						rows={2}
						placeholder='Enter Recipe PantryItems'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicFF'>
					<Form.Label> Recipe Ingredients</Form.Label>
					<Form.Control
						onChange={(e) => setIngredients(e.target.value)}
						value={ingredients}
						as='textarea'
						rows={3}
						placeholder='Enter Recipe Ingredients'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicFF'>
					<Form.Label> Recipe Instructions</Form.Label>
					<Form.Control
						onChange={(e) => setInstructions(e.target.value)}
						value={instructions}
						as='textarea'
						rows={6}
						placeholder='Enter Recipe Instructions'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicFF'>
					<Form.Label> Recipe Notes</Form.Label>
					<Form.Control
						onChange={(e) => setNotes(e.target.value)}
						value={notes}
						as='textarea'
						rows={3}
						placeholder='Enter Recipe Notes'
					/>
				</Form.Group>

				{edit ? (
					<Button
						className='btn'
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								editRecipe(
									recipe._id,
									{
										image,
										name,
										cuisine,
										category,
										pantryItems,
										ingredients,
										instructions,
										notes,
									},
									Navigate
								)
							);
						}}
					>
						Edit Recipe
					</Button>
				) : (
					<Button
						className='btn'
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								addRecipe(
									{
										image,
										name,
										cuisine,
										category,
										pantryItems,
										ingredients,
										instructions,
										notes,
									},
									Navigate
								)
							);
						}}
					>
						Add new Recipe
					</Button>
				)}
			</Form>
		</main>
	);
}

export default AddRecipe;
