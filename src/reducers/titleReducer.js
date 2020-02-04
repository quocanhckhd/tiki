
import * as types from '../actions/types';

const INITIAL_STATE = {
	title: null,
	id: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SHOW_CATEGORY_DETAIL: 
			return { ...state, title: action.title };
		case types.SHOW_PRODUCT_DETAIL:
			return { ...state, id: action.id };
		default:
			return { ...state };

	}
};
