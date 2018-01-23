import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import logo from '../../static/mining-logo.png';
import './style/header.scss';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '72px'
  },
});

class FullWidthTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '熊大'
    };
  }

  onTabChange(tabIndex) {
    this.props.onTabChange(tabIndex);
  }

  render() {
    const { classes, theme } = this.props;
    const { tabIndex } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className="header">
          <ul>
            <li>
              <img src={logo} />
            </li>
            <li className={this.state.tabIndex === 1 ? 'active': ''} onClick={this.onTabChange.bind(this, 1)}>首页</li>
            <li className={this.state.tabIndex === 2 ? 'active': ''} onClick={this.onTabChange.bind(this, 2)}>查询</li>
            <li className={this.state.tabIndex === 3 ? 'active': ''} onClick={this.onTabChange.bind(this, 3)}>应用</li>
            <li className={this.state.tabIndex === 4 ? 'active': ''} onClick={this.onTabChange.bind(this, 4)}>分析</li>
            <li className={this.state.tabIndex === 5 ? 'active': ''} onClick={this.onTabChange.bind(this, 5)}>详情</li>
            <li className={this.state.tabIndex === 6 ? 'active': ''} onClick={this.onTabChange.bind(this, 6)}>协作</li>

            <li className="flex2">
              <TextField
                id="password"
                label="请输入搜索内容"
                className={classes.textField}
                type="text"
                autoComplete="current-password"
                margin="normal"
                value={this.state.searchText}
              />
            </li>
            <li>core</li>
            <li>用户名</li>
            <li>退出</li>
          </ul>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(FullWidthTabs);
