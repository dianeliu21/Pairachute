import { combineReducers } from 'redux';
import * as authReducers from './authReducers';
import routes from './routes';

export default combineReducers(Object.assign(
  authReducers,
  routes,
));
