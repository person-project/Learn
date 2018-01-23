import React, {Component} from 'react';
import './style/header.css';
import AppBar from 'material-ui/AppBar';
import Tabs from './tabs.jsx';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonClick = this.onLeftIconButtonClick.bind(this);
  }

  onLeftIconButtonClick() {
    console.log('点击了左侧的展开菜单按钮');
  }

  render() {
    return (
      <header className="App-header">
        <AppBar titleStyle={{display:'none'}} onLeftIconButtonClick={this.onLeftIconButtonClick} children={<Tabs />}/>
      </header>
    )
  }
}
