import * as types from './actionTypes';
import fb from '../config/initializeFirebase';

function login(email, password) {
  return function (dispatch) {
    dispatch(loginAttempt());
    return fb.auth().signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log(response)
        var user = response.json()
        dispatch(loginSuccessful(user));
      }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/invalid-email') {
            console.log('Email is not valid.');
          } else if (errorCode === 'auth/user-not-found') {
            console.log('No user exists with that email.');
          } else if (errorCode === 'auth/wrong-password') {
            console.log('Password is incorrect.');
          } else {
            console.log(errorMessage);
          }
          dispatch(loginFailure());
      });
  }
}

function loginAttempt() {
  return {
    type: types.LOGIN_ATTEMPT,
  }
}

function loginSuccessful(userObject) {
  return {
    type: types.LOGIN_SUCCESSFUL,
  }
}

function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  }
}


/*
Login state
{
  isAuthenticated: {true/false},
  user: {
    userId,
    email,
    firstName,
    lastName,
    phoneNumber,

  },
}
*/
