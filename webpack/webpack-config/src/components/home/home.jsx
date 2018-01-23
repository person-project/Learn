
import * as SRD from 'storm-react-diagrams';
import React, {Component} from 'react';
import Application from './dragAndDrop.jsx';
const BodyWidget = SRD.BodyWidget;
let app = new Application();

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

	componentDidMount() {
		console.log(SRD);
	}

  render() {
    return (<div className="home" style={{
        width: '100%',
        height: '500px'
      }}>
			<BodyWidget app = {app} />
    </div>)
  }
}
