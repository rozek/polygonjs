/**
 * sends a trigger when the viewer taps or clicks on an object
 *
 *
 */

import {TRIGGER_CONNECTION_NAME} from './_Base';
import {JsConnectionPoint, JsConnectionPointType, JS_CONNECTION_POINT_IN_NODE_DEF} from '../utils/io/connections/Js';
import {JsType} from '../../poly/registers/nodes/types/Js';
import {JsLinesCollectionController} from './code/utils/JsLinesCollectionController';
import {
	ExtendableOnObjectPointerEventJsNode,
	GPUOnObjectPointerEventJsParamsConfig,
	OnObjectPointerEventGPUJsNodeInputName,
	OnObjectPointerEventGPUJsNodeOutputName,
	PointerEventConfigParamConfig,
	pointerEventConfig,
} from './_BaseOnObjectPointerEvent';
import {inputObject3D} from './_BaseObject3D';
import {Poly} from '../../Poly';
import {InitFunctionJsDefinition, RefJsDefinition} from './utils/JsDefinition';
import {ObjectToPointerupOptionsAsString} from '../../scene/utils/actors/rayObjectIntersection/RayObjectIntersectionsPointerupController';
import {nodeMethodName} from './code/assemblers/actor/ActorAssemblerUtils';
import {EvaluatorEventData} from './code/assemblers/actor/ActorEvaluator';
import {PointerEventType} from '../../../core/event/PointerEventType';

const CONNECTION_OPTIONS = JS_CONNECTION_POINT_IN_NODE_DEF;

export class OnObjectPointerupGPUJsParamsConfig extends PointerEventConfigParamConfig(
	GPUOnObjectPointerEventJsParamsConfig
) {}
const ParamsConfig = new OnObjectPointerupGPUJsParamsConfig();

export class OnObjectPointerupGPUJsNode extends ExtendableOnObjectPointerEventJsNode<OnObjectPointerupGPUJsParamsConfig> {
	override readonly paramsConfig = ParamsConfig;
	static override type() {
		return JsType.ON_OBJECT_POINTERUP_GPU;
	}
	override eventData(): EvaluatorEventData | undefined {
		return {
			type: PointerEventType.pointerup,
			emitter: this.eventEmitter(),
			jsType: JsType.ON_OBJECT_POINTERUP,
		};
	}
	override initializeNode() {
		super.initializeNode();
		this.io.inputs.setNamedInputConnectionPoints([
			new JsConnectionPoint(JsConnectionPointType.OBJECT_3D, JsConnectionPointType.OBJECT_3D, CONNECTION_OPTIONS),
			new JsConnectionPoint(
				OnObjectPointerEventGPUJsNodeInputName.worldPosMaterial,
				JsConnectionPointType.MATERIAL,
				CONNECTION_OPTIONS
			),
		]);
		this.io.outputs.setNamedOutputConnectionPoints([
			new JsConnectionPoint(TRIGGER_CONNECTION_NAME, JsConnectionPointType.TRIGGER, CONNECTION_OPTIONS),
			new JsConnectionPoint(
				OnObjectPointerEventGPUJsNodeOutputName.distance,
				JsConnectionPointType.FLOAT,
				CONNECTION_OPTIONS
			),
		]);
	}

	override setLines(linesController: JsLinesCollectionController) {
		const usedOutputNames = this.io.outputs.used_output_names();

		if (usedOutputNames.includes(OnObjectPointerEventGPUJsNodeOutputName.distance)) {
			this._addDistanceRef(linesController);
		}
	}
	override setTriggeringLines(linesController: JsLinesCollectionController, triggeredMethods: string) {
		const object3D = inputObject3D(this, linesController);
		const blockObjectsBehind = this.variableForInputParam(linesController, this.p.blockObjectsBehind);
		const skipIfObjectsInFront = this.variableForInputParam(linesController, this.p.skipIfObjectsInFront);
		const worldPosMaterial = this.variableForInput(
			linesController,
			OnObjectPointerEventGPUJsNodeInputName.worldPosMaterial
		);
		const distanceRef = this._addDistanceRef(linesController);

		const func = Poly.namedFunctionsRegister.getFunction('addObjectToPointerupCheck', this, linesController);
		const options: ObjectToPointerupOptionsAsString = {
			priority: {
				blockObjectsBehind,
				skipIfObjectsInFront,
			},
			gpu: {
				worldPosMaterial,
				distanceRef: `this.${distanceRef}`,
			},
			pointerup: {
				callback: `this.${nodeMethodName(this)}.bind(this)`,
			},
			config: pointerEventConfig(this, linesController),
		};
		const jsonOptions = JSON.stringify(options).replace(/"/g, '');
		const bodyLine = func.asString(object3D, `this`, jsonOptions);
		linesController.addDefinitions(this, [
			new InitFunctionJsDefinition(this, linesController, JsConnectionPointType.OBJECT_3D, this.path(), bodyLine),
		]);

		linesController.addTriggeringLines(this, [triggeredMethods], {gatherable: true});
	}

	private _addDistanceRef(linesController: JsLinesCollectionController) {
		const outDistance = this.jsVarName(OnObjectPointerEventGPUJsNodeOutputName.distance);
		linesController.addDefinitions(this, [
			new RefJsDefinition(this, linesController, JsConnectionPointType.FLOAT, outDistance, `-1`),
		]);
		return outDistance;
	}
}
