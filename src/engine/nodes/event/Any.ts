import {TypedEventNode} from './_Base';
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {EventContext} from '../../scene/utils/events/_BaseEventsController';
import {EventConnectionPoint, EventConnectionPointType} from '../utils/io/connections/Event';

const OUTPUT_NAME = 'event';

class PassEventParamsConfig extends NodeParamsConfig {}
const ParamsConfig = new PassEventParamsConfig();

export class AnyEventNode extends TypedEventNode<PassEventParamsConfig> {
	params_config = ParamsConfig;

	static type() {
		return 'any';
	}
	initialize_node() {
		this.io.inputs.set_named_input_connection_points(
			[0, 1, 2, 3].map((i) => new EventConnectionPoint(`trigger${i}`, EventConnectionPointType.BASE))
		);
		this.io.outputs.set_named_output_connection_points([
			new EventConnectionPoint(OUTPUT_NAME, EventConnectionPointType.BASE),
		]);
	}

	process_event(event_context: EventContext<Event>) {
		this.dispatch_event_to_output(OUTPUT_NAME, event_context);

		// const connections = this.io.connections.output_connections();
		// const nodes: BaseEventNodeType[] = connections.map((connection) => connection.node_dest) as BaseEventNodeType[];
		// for (let node of nodes) {
		// 	node.process_event(event_context);
		// }
	}
}