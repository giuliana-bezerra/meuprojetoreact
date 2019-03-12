import comentarios from './reducers/comentarios';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(comentarios, applyMiddleware(thunkMiddleware));