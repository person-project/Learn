import * as ActionTypes from './actionTypes.js';

export function setUserInformationAction(userInformation) {
  return {
    type: ActionTypes.SET_USER_INFORMATION,
    username: userInformation
  }
}

export function getUserInformationAction() {
  return {
    type: ActionTypes.GET_USER_INFORMATION
  }
}
