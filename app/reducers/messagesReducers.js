import * as types from '../actions/actionTypes';

export function threads(state = {}, action) {
  switch(action.type) {
    case types.LOAD_THREAD_LIST_SUCCESS:
      return Object.assign({}, state, {
        threads: action.threads,
      })
    default:
      return state;
  }
}
