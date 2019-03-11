import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { addTokenToLocalStorage } from './middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';

const configureStore = () =>
  createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk, addTokenToLocalStorage)
  )
);

export default configureStore;
