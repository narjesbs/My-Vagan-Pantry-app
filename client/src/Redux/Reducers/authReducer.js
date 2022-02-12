import {
	FAIL,
	GET_CURRENT,
	LOGIN,
	REGISTER,
	LOGOUT,
	CLEARERRORS,
} from '../Types/authType';

const initialState = {
	user: null,
	errors: null,
	auth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER:
		case LOGIN:
			localStorage.setItem('token', payload.token);
			return { ...state, user: payload.user, auth: true, errors: null };
		case FAIL:
			return { ...state, auth: false, user: null, errors: payload };
		case GET_CURRENT:
			return { ...state, user: payload, auth: true };
		case LOGOUT:
			localStorage.removeItem('token');
			return { ...state, auth: false, user: null, errors: null };
		case CLEARERRORS:
			return { ...state, errors: null };
		default:
			return state;
	}
};

export default authReducer;
