import {combineReducers} from 'redux';
import * as ActionTypes from './actionTypes.js';

const initialState = {
  username: 'admin',
  password: 'abc123'
}

function userName(username = initialState.username, action) {
  switch (action.type) {
    case ActionTypes.GET_USER_INFORMATION:
    default:
      return username;
  }
}

function setUserName(username = initialState.username, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_INFORMATION:
      initialState.username = action.username;
      return initialState.username;
    default:
      return initialState.username;
  }
}

const reducer = combineReducers({
  userName,
  setUserName
})


export default reducer;
