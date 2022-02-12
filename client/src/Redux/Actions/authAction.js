import axios from 'axios';
import {
	CLEARERRORS,
	FAIL,
	GET_CURRENT,
	LOGIN,
	LOGOUT,
	REGISTER,
} from '../Types/authType';

export const register = (newuser, Navigate) => async (dispatch) => {
	try {
		// talk to back
		const res = await axios.post('/auth/signUp', newuser);
		dispatch({ type: REGISTER, payload: res.data }); // user, msg, token
		console.log(res.data);
		res.data.user.role === 'admin' ? Navigate('/Admin') : Navigate('/Profile');
	} catch (error) {
		dispatch({ type: FAIL, payload: error.response.data });
	}
};

export const login = (newuser, Navigate) => async (dispatch) => {
	try {
		const res = await axios.post('/auth/signIn', newuser); // user, msg, token
		dispatch({ type: LOGIN, payload: res.data });
		console.log(res.data);
		res.data.user.role === 'admin' ? Navigate('/Admin') : Navigate('/Profile');
	} catch (error) {
		dispatch({ type: FAIL, payload: error.response.data }); // errors from th back
	}
};

export const getcurrent = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	const config = {
		headers: {
			authorization: token,
		},
	};
	try {
		const res = await axios.get('/auth/current', config);

		dispatch({ type: GET_CURRENT, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => {
	return { type: LOGOUT };
};

export const clearerrors = () => {
	return { type: CLEARERRORS };
};
export const favorite = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/fav/${id}/Favorite`);
		dispatch(getcurrent());
	} catch (error) {
		console.log(error);
	}
};
