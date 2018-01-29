import {observable, action} from 'mobx';

var appState = observable({
  timer: 0
})

appState.restTimer = action((addTime) => {
  appState.timer += addTime;
})

setInterval(action(() => {
  appState.timer += 1;
}), 1000)

export default appState;
