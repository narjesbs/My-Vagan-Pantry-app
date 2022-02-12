import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import recipeReducer from './recipeReducer';
import pantryReducer from './pantryReducer';

const rootReducer = combineReducers({
	authReducer,
	userReducer,
	recipeReducer,
	pantryReducer,
});

export default rootReducer;
