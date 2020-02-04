import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGIN_USER,
	SIGN_UP,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL
   } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, loading: false, user: action.payload };
		case LOGIN_USER_FAIL: 
			return { ...state, loading: false, error: 'Sai tên email hoặc mật khẩu' };
		case LOGIN_USER:
			return { ...state, loading: true, email: '', password: '' };
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case SIGN_UP:
			return { ...state, loading: true, email: '', password: '' };
		case SIGN_UP_FAIL:
			return { ...state, loading: false, error: 'Không đăng ký thành công, vui lòng kiểm tra lại thông tin đăng ký' };
		case SIGN_UP_SUCCESS: {
			return { ...state, ...INITIAL_STATE, loading: false, error: 'Đăng ký thành công.' };
		}
		default: 
			return state;
	}
};
