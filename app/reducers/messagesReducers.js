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

export function focusedThread(state = {}, action) {
  switch(action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        id: action.thread_info.id,
        title: action.thread_info.title,
        users: action.thread_info.users,
        messages: action.thread_info.messages,
      })
    default:
      return state;
  }
}
