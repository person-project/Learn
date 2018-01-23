import React, {Component} from 'react';
import './style/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appList: [{
        name: '事件人员分析',
        background: '',
        isUsed: true
      }, {
        name: '人员分析',
        background: '',
        isUsed: true
      }, {
        name: '报送管理',
        background: '',
        isUsed: false
      }, {
        name: '群体分类',
        background: '',
        isUsed: false
      }, {
        name: '情报收集',
        background: '',
        isUsed: false
      }, {
        name: '事件预警',
        background: '',
        isUsed: false
      }]
    }
    this.getAppItem = this.getAppItem.bind(this);
  }

  getAppItem() {
    return this.state.appList.map((item, index) => (
      <li key={index} className={item.isUsed ? '' : 'unActive'}>
        <div></div>
        <span>{item.name}</span>
      </li>
    ))
  }

  render() {
    return (<div className="appContainer">
      <ul>
        {this.getAppItem()}
      </ul>
    </div>)
  }
}
