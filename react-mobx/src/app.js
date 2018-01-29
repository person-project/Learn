import './components/main';

import React from 'react';
import ReactDom from 'react-dom';
import Container from './container/container';
import {Provider} from 'mobx-react';
import store from './mobx/store.js';

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
