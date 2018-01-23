import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter} from 'react-router-dom';
import App from './App';

console.log(store.getState());
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    )
  }
}
