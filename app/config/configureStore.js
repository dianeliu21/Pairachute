import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(thunk, logger)
  )
  return createStore(reducer, initialState, enhancer);
}
