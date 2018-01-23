import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import './style/file.css';

export default class File extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalNum: 0,
      companyCustom: 0,
      personalCustom: 0,
      contract: 0,
      other: 0
    }
  }
  render() {
    return (
      <div className="file">
        <div className="fileOperation">
          <ul>
            <li>后退</li>
            <li>前进</li>
            <li>到图析</li>
            <li>到地图</li>
            <li>文档列表</li>
            <li>导入</li>
          </ul>
        </div>
        <div className="fileContainer">
          <div className="sideContaier">
            <List>
              <Subheader>实体数 {this.state.totalNum}</Subheader>
              <ListItem primaryText={'公司客户 '  + this.state.companyCustom} />
              <ListItem primaryText={'个人客户 '  + this.state.personalCustom}  />
              <ListItem
                primaryText={'合同 '  + this.state.contract}
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText={'公司客户 '  + this.state.companyCustom}
                  />,
                ]}
              />
              <ListItem primaryText={'其他 '  + this.state.other}  />
            </List>
          </div>
          <div className="fileContent">
            to do...
          </div>
        </div>
      </div>
    )
  }
}
