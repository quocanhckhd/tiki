
import firebase from 'firebase';

import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
 
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(loginUserFail(dispatch));
  };
};

export const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const signUpSuccess = (dispatch) => {
  dispatch({ type: SIGN_UP_SUCCESS });
};
export const signUpFail = dispatch => {
  dispatch({ type: SIGN_UP_FAIL });
};

export const signUp = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(signUpSuccess(dispatch))
      .catch(signUpFail(dispatch));
  };
};

