import React, {Component} from 'react';
import './style/tabs.css';
import {Link} from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [{
        title: '首页',
        taregt: '/'
      }, {
        title: '查询',
        taregt: '/search'
      }, {
        title: '应用',
        taregt: '/app'
      }, {
        title: '分析',
        taregt: '/graph'
      }, {
        title: '详情',
        taregt: '/file'
      }, {
        title: '协作',
        taregt: '/cooperation'
      }],
      active: 1,
      dataSource: []
    };

    this.getTabItem = this.getTabItem.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  getTabItem() {
    return this.state.tabList.map((item, index) => {
      if (this.state.active === (index + 1)) {
        return (<li key={index} onClick={this.onTabChange.bind(this, index +1)}><Link to={item.taregt} className="active">{item.title}</Link></li>)
      } else {
        return (<li key={index} onClick={this.onTabChange.bind(this, index +1)}><Link to={item.taregt}>{item.title}</Link></li>)
      }
    })
  }

  onTabChange(activeTab) {
    this.setState({
      active: activeTab
    })
  }

  handleUpdateInput() {
    console.log('输入了值');
  }

  render() {
    return(
      <div className='tabs'>
        <ul className="tabsLeft">
          {this.getTabItem()}
        </ul>
        <ul className="tabsRight">
          <li>
            <AutoComplete
              hintText="请输入信息"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              style={{width: '120px'}}
              fullWidth= 'false'
              ></AutoComplete>
          </li>
          <li>文件设置</li>
          <li>username</li>
          <li>退出登录</li>
        </ul>
      </div>
    )
  }
}
