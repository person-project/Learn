import React, {Component} from 'react';
import './style/intelligence.scss';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Aside from './aside.jsx';

export default class Intelligence extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, tabIndex) {
    console.log(tabIndex);
    this.setState({
      tabIndex: tabIndex
    })
  }
  render() {
    const { tabIndex } = this.state;
    return (
      <div className="intelligence">
        <div className="title">内生情报</div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="情报来源" />
            <Tab label="信息描述" />
          </Tabs>
        </AppBar>
        {tabIndex}
        {tabIndex === 0 && <Aside title="情报来源"/>}
        {tabIndex === 1 && <Aside title="信息描述"/>}
      </div>
    )
  }
}
