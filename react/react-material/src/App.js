import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './component/home/home.jsx';
import Search from './component/search/search.jsx';
import MyApp from './component/app/app.jsx';
import File from './component/file/file.jsx';
import Graph from './component/graph/graph.jsx';
import Cooperation from './component/cooperation/cooperation.jsx';
import FullWidthTabs from './component/header/header.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 1
    }
    this.onTabChange = this.onTabChange.bind(this);
  }
  onTabChange(tabIndex) {
    this.setState({
      tabIndex: tabIndex
    })
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <div className="App">
        <FullWidthTabs onTabChange={this.onTabChange} />
        {tabIndex === 1 && <Home />}
        {tabIndex === 2 && <Search>查询</Search>}
        {tabIndex === 3 && <MyApp>应用</MyApp>}
        {tabIndex === 4 && <Graph>分析</Graph>}
        {tabIndex === 5 && <File>详情</File>}
        {tabIndex === 6 && <Cooperation>协作</Cooperation>}
      </div>
    );
  }
}

export default App;
