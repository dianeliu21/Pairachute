import * as types from '../actions/actionTypes';

export function authState(state = {}, action) {
  switch(action.type) {
    case types.LOGIN_ATTEMPT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isPending: true
      })
    case types.LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isPending: false,
        user: action.user
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isAuthenticated: false,
        isPending: false
      })
    default:
      return state;
  }
}
