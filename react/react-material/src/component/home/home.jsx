import React, {Component} from 'react';
import Bdmap from '../bdMap/bdMap.jsx';
import Intelligence from '../intelligence/intelligence.jsx';
import './style/home.scss';

export default class Home extends Component{
  render() {
    return (
      <div className="home">
        <Bdmap title="活动范围" />
        <Intelligence />
      </div>
    )
  }
}
