import * as types from './actionTypes';
import fb from '../config/initializeFirebase';

export function login(email, password) {
  return function (dispatch) {
    dispatch(loginAttempt());
    return fb.auth().signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log(response)
        var user = response.json()
        dispatch(loginSuccessful(user));
      }).catch(function (error) {
          console.log(error.message)
          dispatch(loginFailure(error.message));
      });
  }
}

function loginAttempt() {
  return {
    type: types.LOGIN_ATTEMPT,
  }
}

function loginSuccessful(user) {
  return {
    type: types.LOGIN_SUCCESSFUL,
    user
  }
}

function loginFailure(errorMessage) {
  return {
    type: types.LOGIN_FAILURE,
    errorMessage
  }
}
