import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { addTokenToLocalStorage } from './middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const configureStore = () =>
  createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk, logger, addTokenToLocalStorage)
  )
);

export default configureStore;
