import * as SRD from "storm-react-diagrams";
import { DiamonNodeWidgetFactory } from "./DiamondNodeWidget";

export class DiamondWidgetFactory extends SRD.NodeWidgetFactory {
	constructor() {
		super("diamond");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return DiamonNodeWidgetFactory({ node: node });
	}
}
