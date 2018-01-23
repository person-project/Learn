import * as SRD from 'storm-react-diagrams';

export default class Application {
  activeModel: SRD.DiagramModel;
  diagramEngine: SRD.DiagramEngine;

  constructor() {
    this.diagramEngine = new SRD.DiagramEngine();
    // this.diagramEngine.installDefaultFactories();

    this.newModel();
  }
  newModel() {
    this.activeModel = new SRD.DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeModel);

    var node1 = new SRD.DefaultNodeModel('node 1', 'rgb(0, 192, 255)');
    var port1 = node1.addPort(new SRD.DefaultPortModel(false, 'out-1', 'Out'));
    node1.x = 20;
    node1.y = 20;

    var node2 = new SRD.DefaultNodeModel('node 2', 'rgb(192, 255, 0)');
    var port2 = node1.addPort(new SRD.DefaultPortModel(true, 'in-1', 'IN'));
    node2.x = 120;
    node2.y = 120;

    var link1 = new SRD.LinkModel();
    link1.setSourcePort(port1);
    link1.setTargetPort(port2);

    this.activeModel.addNode(node1);
    this.activeModel.addNode(node2);
    this.activeModel.addLink(link1);
  }

  getActiveDiagram() {
    return this.activeModel;
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }

}
