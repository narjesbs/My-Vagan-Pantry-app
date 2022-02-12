import axios from 'axios';
import { GET_PANTRY_ITEMS, GET_PANTRY } from '../Types/pantryType';

export const getpantryitems = () => async (dispatch) => {
	try {
		const res = await axios.get('/pantry/AllPantryItems');
		dispatch({
			type: GET_PANTRY_ITEMS,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const getpantry = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/pantry/Pantry/${id}`);
		dispatch({
			type: GET_PANTRY,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const addPantry = (newPantry) => async (dispatch) => {
	try {
		const res = await axios.post('/pantry/AddPantry', newPantry);
		dispatch(getpantryitems());
	} catch (error) {
		console.log(error);
	}
};

export const editPantry = (id, updatedPantry) => async (dispatch) => {
	try {
		const res = await axios.put(`/pantry/UpdatePantry/${id}`, updatedPantry);
		dispatch(getpantryitems());
	} catch (error) {
		console.log(error);
	}
};

export const deletePantry = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/pantry/DeletePantry/${id}`);
		dispatch(getpantryitems());
	} catch (error) {
		console.log(error);
	}
};
