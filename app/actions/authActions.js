import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import fb from '../config/initializeFirebase';

export function login(email, password) {
  return function (dispatch) {
    dispatch(loginAttempt());
    return fb.auth().signInWithEmailAndPassword(email, password)
      .then(function (response) {
        var user = {
          displayName: response.displayName,
          email: response.email,
          emailVerified: response.emailVerified,
          providerData: response.providerData,
          refreshToken: response.refreshToken,
          uid: response.uid,
        };
        dispatch(loginSuccess(user))
      }).catch(function (error) {
        console.log(error.message)
        dispatch(loginFailure(error.message));
      });
  }
}

export function signup(email, password) {
  return function (dispatch) {
    dispatch(signupAttempt());
    return fb.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        var user = {
          displayName: response.displayName,
          email: response.email,
          emailVerified: response.emailVerified,
          providerData: response.providerData,
          refreshToken: response.refreshToken,
          uid: response.uid,
        };
        dispatch(signupSuccess(user))
      }).catch(function(error) {
        console.log(error.message)
        dispatch(signupFailure(error.message))
      });
  }
}

function loginAttempt() {
  return {
    type: types.LOGIN_ATTEMPT,
  }
}

function loginSuccess(user) {
  Actions.home
  return {
    type: types.LOGIN_SUCCESS,
    user
  }
}

function loginFailure(errorMessage) {
  return {
    type: types.LOGIN_FAILURE,
    errorMessage
  }
}


function signupAttempt() {
  return {
    type: types.SIGNUP_ATTEMPT,
  }
}


function signupSuccess(user) {
  Actions.home
  return {
    type: types.SIGNUP_SUCCESS,
    user
  }
}


function signupFailure(errorMessage) {
  return {
    type: types.SIGNUP_FAILURE,
    errorMessage
  }
}
