import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getUserInformationAction, setUserInformationAction} from './redux/action';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername() {
    console.log(this.props.getUserInformation());
    this.props.setUserInformation('abc');
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React {this.props.username}</h1>
        </header>
        <input type="text" placeholder="请输入用户名" />
        <input type="password" placeholder="请输入密码" />
        <button onClick={this.changeUsername}>修改用户名</button>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.userName,
    setUserName: state.setUserName
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserInformation: () => {
    dispatch(getUserInformationAction())
  },
  setUserInformation: (status) => {
    dispatch(setUserInformationAction(status))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
