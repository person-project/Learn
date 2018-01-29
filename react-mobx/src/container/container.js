import './style/common.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route, withRouter} from 'react-router-dom';
import {Header} from '../components/main';
import {inject, observer} from 'mobx-react';
// 引入配置的路由
import routes from '../router/routes';

// @withRouter

@inject(({store}) => ({
  appState: store.appState
}))

@observer

class Container extends Component {
  constructor(props) {
    super(props);
    this.routeItem = this.routeItem.bind(this);
    this.onHandleRestTimer = this.onHandleRestTimer.bind(this);
  }

  routeItem() {
    return routes.map(function(item, index) {
      return <Route key={index} path={item.path} component={item.component} exact={!!item.exact}/>
    })
  }

  onHandleRestTimer = () => {
    this.props.appState.restTimer(100)
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h2 onClick={this.onHandleRestTimer}>{this.props.appState.timer}</h2>
          <Header/>
          {/* <Switch> */}
            {/* {this.routeItem()} */}
          {/* </Switch> */}
        </div>
     </Router>)
  }
}

export default Container;
