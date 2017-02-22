import { combineReducers } from 'redux';
import * as authReducers from './authReducers';
import * as messagesReducers from './messagesReducers';
import routes from './routes';

export default combineReducers(Object.assign(
  authReducers,
  messagesReducers,
));
