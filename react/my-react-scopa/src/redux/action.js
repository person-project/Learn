import * as ActionTypes from './actionTypes';

export function setInformation(userInformation) {
  return {
    type: ActionTypes.SET_USER_INFORMATION,
    userInformation
  }
}
