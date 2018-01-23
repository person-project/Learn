import {createStore} from 'redux';
import reducer, {initialState} from './reducers.js';

const store = createStore(reducer);

export default store;
