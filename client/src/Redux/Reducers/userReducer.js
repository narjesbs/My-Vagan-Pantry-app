import { GET_USERS } from '../Types/userType';

const initialState = {
	users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USERS:
			return { ...state, users: payload.usersList };

		default:
			return state;
	}
};
export default userReducer;
