import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import titleReducer from './titleReducer';

export default combineReducers({
	auth: AuthReducer,
	title: titleReducer
});
