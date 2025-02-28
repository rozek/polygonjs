/**
 * sends a trigger when the listened object dispatches an event
 *
 *
 */
import {TRIGGER_CONNECTION_NAME, TypedJsNode} from './_Base';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {JsConnectionPoint, JsConnectionPointType, JS_CONNECTION_POINT_IN_NODE_DEF} from '../utils/io/connections/Js';
import {JsType} from '../../poly/registers/nodes/types/Js';
import {inputObject3D} from './_BaseObject3D';
import {JsLinesCollectionController} from './code/utils/JsLinesCollectionController';
import {Poly} from '../../Poly';
import {InitFunctionJsDefinition} from './utils/JsDefinition';
import {nodeMethodName} from './code/assemblers/actor/ActorAssemblerUtils';

enum OnObjectDispatchEventJsNodeInputName {
	eventName = 'eventName',
}

const CONNECTION_OPTIONS = JS_CONNECTION_POINT_IN_NODE_DEF;
class OnObjectDispatchEventJsParamsConfig extends NodeParamsConfig {
	/** @param event names (space separated) */
	eventNames = ParamConfig.STRING('my-eventA my-eventB');
}
const ParamsConfig = new OnObjectDispatchEventJsParamsConfig();

export class OnObjectDispatchEventJsNode extends TypedJsNode<OnObjectDispatchEventJsParamsConfig> {
	override readonly paramsConfig = ParamsConfig;
	static override type(): JsType.ON_OBJECT_DISPATCH_EVENT {
		return JsType.ON_OBJECT_DISPATCH_EVENT;
	}
	override isTriggering() {
		return true;
	}
	override initializeNode() {
		super.initializeNode();
		this.io.connection_points.spare_params.setInputlessParamNames(['eventNames']);
		this.io.inputs.setNamedInputConnectionPoints([]);
		this.io.outputs.setNamedOutputConnectionPoints([
			new JsConnectionPoint(TRIGGER_CONNECTION_NAME, JsConnectionPointType.TRIGGER, CONNECTION_OPTIONS),
			new JsConnectionPoint(
				OnObjectDispatchEventJsNodeInputName.eventName,
				JsConnectionPointType.STRING,
				CONNECTION_OPTIONS
			),
		]);
	}

	override setTriggeringLines(shadersCollectionController: JsLinesCollectionController, triggeredMethods: string) {
		const object3D = inputObject3D(this, shadersCollectionController);
		const eventNames = this.variableForInputParam(shadersCollectionController, this.p.eventNames);
		const func = Poly.namedFunctionsRegister.getFunction(
			'objectAddEventListeners',
			this,
			shadersCollectionController
		);
		const bodyLine = func.asString(object3D, eventNames, `this`, `this.${nodeMethodName(this)}.bind(this)`);
		shadersCollectionController.addDefinitions(this, [
			new InitFunctionJsDefinition(
				this,
				shadersCollectionController,
				JsConnectionPointType.OBJECT_3D,
				this.path(),
				bodyLine
			),
		]);

		shadersCollectionController.addTriggeringLines(this, [triggeredMethods], {gatherable: false});
	}
}
