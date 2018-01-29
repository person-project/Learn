import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject(({store}) => ({
  appState: store.appState
}))
@observer

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="home" style={{
        width: '100%',
        height: '500px'
      }}>
      <h1>11111{this.props.appState.timer}</h1>
    </div>)
  }
}
