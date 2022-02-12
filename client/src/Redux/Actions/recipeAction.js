import axios from 'axios';
import {
	GET_RECIPE,
	GET_RECIPES,
	TOGGLE_FALSE,
	TOGGLE_TRUE,
} from '../Types/recipeType';

export const getrecipes = () => async (dispatch) => {
	try {
		const res = await axios.get('/recipe/AllRecipes');
		dispatch({
			type: GET_RECIPES,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const getrecipe = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/recipe/${id}`);
		console.log(res.data);
		dispatch({
			type: GET_RECIPE,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const addRecipe = (newRecipe, Navigate) => async (dispatch) => {
	try {
		const res = await axios.post('/recipe/AddRecipe', newRecipe);
		dispatch(getrecipes());
		Navigate('/AllRecipes');
	} catch (error) {
		console.log(error);
	}
};

export const editRecipe = (id, updatedRecipe, Navigate) => async (dispatch) => {
	try {
		const res = await axios.put(`/recipe/UpdateRecipe/${id}`, updatedRecipe);
		dispatch(getrecipes());
		Navigate('/AllRecipes');
	} catch (error) {
		console.log(error);
	}
};

export const deleteRecipe = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/recipe/DeleteRecipe/${id}`);
		dispatch(getrecipes());
	} catch (error) {
		console.log(error);
	}
};

export const toggletrue = () => {
	return {
		type: TOGGLE_TRUE,
	};
};

export const togglefalse = () => {
	return {
		type: TOGGLE_FALSE,
	};
};

