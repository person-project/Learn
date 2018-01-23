import React, {Component} from 'react';
import './style/bdMap.scss';

export default class Bdmap extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BdmapContainer">
        <div className="mapTitle">{this.props.title}</div>
        <div>bdMap</div>
      </div>
    )
  }
}
