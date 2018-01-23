import './style/common.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Header} from '../components/main';

// 引入配置的路由
import routes from '../router/routes';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.routeItem = this.routeItem.bind(this);
  }

  routeItem() {
    return routes.map(function(item, index) {
      return <Route key={index} path={item.path} component={item.component} exact={!!item.exact}/>
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          {/* <Switch> */}
            {/* {this.routeItem()} */}
          {/* </Switch> */}
        </div>
     </Router>)
  }
}
