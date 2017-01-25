import * as types from '../actions/actionTypes';

export function authState(state = {}, action) {
  switch(action.type) {
    case types.LOGIN_ATTEMPT:
    case types.SIGNUP_ATTEMPT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isPending: true
      })
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isPending: false,
        user: action.user
      })
    case types.LOGIN_FAILURE:
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isAuthenticated: false,
        isPending: false
      })
    default:
      return state;
  }
}

export function user(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        displayName: action.user.displayName,
        email: action.user.email,
        emailVerified: action.user.emailVerified,
        providerData: action.user.providerData,
        refreshToken: action.user.refreshToken,
        uid: action.user.uid,
      })
    default:
      return state;
  }
}
