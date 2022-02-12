import axios from 'axios';
import { GET_USERS } from '../Types/userType';

export const getUsers = () => async (dispatch) => {
	try {
		const res = await axios.get('/auth//UsersList');
		dispatch({ type: GET_USERS, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};
