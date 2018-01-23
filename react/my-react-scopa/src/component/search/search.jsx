import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import './style/search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  onHandleChangeTab(activeTab) {
    this.setState({
      active: activeTab
    })
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="searchContent">
          <div className="inputContainer">
            <TextField
              hintText="请输入身份证号，姓名，车牌号，手机号等"
              fullWidth={true}
              style={{width: '100%', height: '46px'}}
            />
          </div>
          <i className="material-icons">search</i>
        </div>
        <div className="searchType">
          <ul>
            <li className={this.state.active === 1 ? 'active' : ''} onClick={this.onHandleChangeTab.bind(this, 1)}>
              <div>全部</div>
              <span>全部</span>
            </li>
            <li className={this.state.active === 2 ? 'active' : ''} onClick={this.onHandleChangeTab.bind(this, 2)}>
              <div>实体</div>
              <span>实体</span>
            </li>
            <li className={this.state.active === 3 ? 'active' : ''} onClick={this.onHandleChangeTab.bind(this, 3)}>
              <div>文本</div>
              <span>文本</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
