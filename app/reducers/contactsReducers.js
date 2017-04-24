import * as types from '../actions/actionTypes';

export function contacts(state = {}, action) {
  switch (action.type) {
    case types.LOAD_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        contacts: action.contacts
      })
    default:
      return state;
  }
}
