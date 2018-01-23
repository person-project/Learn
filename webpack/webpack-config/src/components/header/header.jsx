import './style/header.scss';
import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {Home, DataModel, AnalyzeModel, OfflineModel, ScoreModel, AccountManagment} from '../main';
import Home from '../home/home.jsx';
import DataModel from '../dataModel/dataModel.jsx';
import AnalyzeModel from '../analyzeModel/analyzeModel.jsx';
import OfflineModel from '../offlineModel/offlineModel.jsx';
import ScoreModel from '../scoreModel/scoreModel.jsx';
import AccountManagement from '../accountManagement/accountManagement.jsx';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerList: [
        {
          title: '首页',
          to: '/'
        }, {
          title: '数据模型',
          to: '/datamodel'
        }, {
          title: '分析模型',
          to: '/analyzemodel'
        }, {
          title: '离线模型',
          to: '/offlinemodel'
        }, {
          title: '积分模型',
          to: '/scoremodel'
        }, {
          title: '账号管理',
          to: '/accountmanagment'
        }
      ]
    }
    this.headerItem = this.headerItem.bind(this);
    this.onTabChange = this.onTabChange.bind(this, event);
  }

  headerItem() {
    return this.state.headerList.map(function(item, index) {
      if (item.title === '首页') {
        return (<Tab key={index} label={item.title}>
          <Home />
        </Tab>)
      } else if (item.title === '数据模型') {
        return (<Tab key={index} label={item.title}>
          <DataModel />
        </Tab>)
      } else if (item.title === '分析模型') {
        return (<Tab key={index} label={item.title}>
          <AnalyzeModel />
        </Tab>)
      } else if (item.title === '离线模型') {
        return (<Tab key={index} label={item.title}>
          <OfflineModel />
        </Tab>)
      } else if (item.title === '积分模型') {
        return (<Tab key={index} label={item.title}>
          <ScoreModel />
        </Tab>)
      } else {
        return (<Tab key={index} label={item.title}>
          <AccountManagement />
        </Tab>)
      }
    })
  }

  onTabChange(event) {
    console.log(event);
  }

  render() {
    return (<div className="header">
        <MuiThemeProvider>
          <Tabs onChange={this.onTabChange}>
            {this.headerItem()}
          </Tabs>
        </MuiThemeProvider>
    </div>)
  }
}
