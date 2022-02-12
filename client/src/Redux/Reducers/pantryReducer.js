import { GET_PANTRY_ITEMS, GET_PANTRY } from '../Types/pantryType';

const initialState = {
	pantryItems: [],
	pantry: {},
};

const pantryReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_PANTRY_ITEMS:
			return {
				...state,
				pantryItems: payload.pantryItems,
			};
		case GET_PANTRY:
			return {
				...state,
				pantry: payload.findPantry,
			};
		default:
			return state;
	}
};

export default pantryReducer;
