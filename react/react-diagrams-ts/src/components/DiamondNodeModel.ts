import * as SRD from "storm-react-diagrams";
import { DiamondPortModel } from "./DiamondPortModel";

export class DiamondNodeModel extends SRD.NodeModel {
	constructor() {
		super("diamond");
		console.log(new DiamondPortModel('top'));
		this.addPort(new DiamondPortModel("top"));
		this.addPort(new DiamondPortModel("left"));
		this.addPort(new DiamondPortModel("bottom"));
		this.addPort(new DiamondPortModel("right"));
	}
}
