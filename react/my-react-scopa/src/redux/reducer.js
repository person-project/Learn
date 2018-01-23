import {combineReducers} from 'redux';
import * as ActionTypes from './actionTypes';

const initState = {
  username: 'zzh', // 用户名
  password: '123456' // 密码
}

function setUserInformation(init = initState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_INFORMATION:
         return {
           username: action.username,
           password: action.password
         }
    default:
        return init
  }
}

// 合并reducer

const reducer = combineReducers({
  setUserInformation
})

export default reducer;
