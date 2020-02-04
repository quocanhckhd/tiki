import * as types from './types';

export const showCategoryDetail = title => ({
	type: types.SHOW_CATEGORY_DETAIL,
	title
});

export const showProductDetail = id => ({
	type: types.SHOW_PRODUCT_DETAIL,
	id
});
