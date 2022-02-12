import {
	GET_RECIPE,
	GET_RECIPES,
	TOGGLE_FALSE,
	TOGGLE_TRUE,
} from '../Types/recipeType';

const initialState = {
	recipes: [],
	recipe: {},
	edit: false,
};

const recipeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: payload.recipesList,
			};
		case GET_RECIPE:
			return {
				...state,
				recipe: payload.findRecipe,
			};
		case TOGGLE_TRUE:
			return {
				...state,
				edit: true,
			};
		case TOGGLE_FALSE:
			return {
				...state,
				edit: false,
			};
		default:
			return state;
	}
};

export default recipeReducer;
