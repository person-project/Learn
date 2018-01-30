import './style/main.css';
import './style/style.min.css';
/*
 * 在使用storm-react-diagrams的时候要在最层的容器上设置 display： flex；这样布局就不会出现混乱的情况
*/

import React, { Component } from 'react';
import {
  AbstractInstanceFactory,
  DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DiagramModel,
	DefaultNodeModel,
	LinkModel,
	DefaultPortModel,
	DiagramWidget,
  PortWidget,
  NodeModel
} from 'storm-react-diagrams';

export default class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  }

  render() {
    const _this = this;
    const engine = new DiagramEngine();
    engine.registerNodeFactory(new DefaultNodeFactory());
    engine.registerLinkFactory(new DefaultLinkFactory());

    const model = new DiagramModel();
    model.setGridSize(20);

    var node1 = new DefaultNodeModel('Node 1', 'rgb(0, 192, 255)');
    var port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'Out'));

    var node2 = new DefaultNodeModel('Node 2', 'rbg(192, 255, 0)');
    var port2 = node2.addPort(new DefaultPortModel(true, 'in-1', 'IN'));

    var node3 = new DefaultNodeModel('Node 3', 'rbg(0, 192, 255)');
    var port3 = node3.addPort(new DefaultPortModel(false, 'out-1', 'Out'));

    console.log(AbstractInstanceFactory);

    node1.x = 100;
    node1.y = 100;
    node2.x = 400;
    node2.y = 400;
    node3.x = 600;
    node3.y = 300;

    var link1 = new LinkModel();
    link1.setSourcePort(port1);
    link1.setTargetPort(port2);

    model.addNode(node1);
    model.addNode(node2);
    model.addNode(node3);
    model.addLink(link1);

    // [node1, node2, link1].forEach(item => {
    //   item.addListener({
    //     selectionChanged: function (item) {
    //       _this.setState({
    //         item: item
    //       }, function () {
    //         console.log(_this.state.item);
    //       })
    //     }
    //   })
    // })

    engine.setDiagramModel(model);
    // maxNumberPointsPerLink 设置连接线可以设置几个弯曲的点
    // engine.zoomToFit() 方法可以调整图形的位置
    return (<div className="main-container">
          <div>
            <button onClick={() => {
              console.log('onClick');
              engine.zoomToFit();
            }}>zoom to fit</button>
            <button>Update Position</button>
          </div>
          <DiagramWidget diagramEngine={engine} maxNumberPointsPerLink='2' />
    </div>)
  }
}
