import React, { Component } from 'react';
import routes from './router/routes';
import './App.css';
import Header from './component/header/header.jsx';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.getRouterItem = this.getRouterItem.bind(this);
  }

  getRouterItem() {
   return routes.map((item, index) => (
     <Route key={index} path={item.path} exact={!!item.exact} component={item.component} />
   ))
 }

  render() {
    return (
      <div className="App">
        <Header />
        {this.getRouterItem()}
      </div>
    );
  }
}

// // 映射redux的全局的state到组件的props上
// const mapStateToProps = (state) => ({
//     username: state.username,
//     password: state.password
//   })
//
// // 映射dispatch到props上
// const mapDispathToProps = (dispatch) => ({
//   dispatchUserInformation: (status) => {
//     dispatch(setInformation(status))
//   }
// })
//
// export default connect(mapStateToProps, mapDispathToProps)(App);
export default App;
