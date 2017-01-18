import { combineReducers } from 'redux';
import * as authReducer from './auth';

export default combineReducers(Object.assign(
  authReducer,
))
