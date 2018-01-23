import {createStore} from 'redux';
import todos from '../reducer/reducers';

const store = createStore(todos);

export default store;
