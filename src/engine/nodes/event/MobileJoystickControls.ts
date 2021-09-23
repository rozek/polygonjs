/**
 * Creates a virtual joystick for mobile first person controls
 *
 * @remarks
 * Ensure to have the following tag in your html <head>:
 * <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
 * as this will prevent the screen from zooming in and out when using a finger to translate and another to rotate.
 *
 */
import {Camera} from 'three/src/cameras/Camera';
import {TypedCameraControlsEventNode} from './_BaseCameraControls';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {EventConnectionPoint, EventConnectionPointType} from '../utils/io/connections/Event';
import {MobileJoystickControls, DEFAULT_PARAMS} from '../../../modules/core/controls/MobileJoystickControls';
import {CameraControlsNodeType, NodeContext} from '../../poly/NodeContext';
import {BaseNodeType} from '../_Base';
import {ObjType} from '../../poly/registers/nodes/types/Obj';
import {isBooleanTrue} from '../../../core/BooleanValue';
import {Capsule} from 'three/examples/jsm/math/Capsule';
import {Vector3} from 'three/src/math/Vector3';

const EVENT_START = 'start';
const EVENT_CHANGE = 'change';
const EVENT_END = 'end';

type MobileJoystickControlsMap = Map<string, MobileJoystickControls>;

class MobileJoystickEventParamsConfig extends NodeParamsConfig {
	/** @param click to lick controls */
	minPolarAngle = ParamConfig.FLOAT(0, {
		range: [0, Math.PI],
		rangeLocked: [true, true],
	});
	/** @param click to lick controls */
	maxPolarAngle = ParamConfig.FLOAT('$PI', {
		range: [0, Math.PI],
		rangeLocked: [true, true],
	});
	/** @param rotation speed */
	rotationSpeed = ParamConfig.FLOAT(DEFAULT_PARAMS.rotationSpeed);
	/** @param translation speed */
	translationSpeed = ParamConfig.FLOAT(DEFAULT_PARAMS.translationSpeed);
	/** @param detects collisions */
	collideWithGeo = ParamConfig.BOOLEAN(0);
	/** @param geometry to collide with */
	collidingGeo = ParamConfig.NODE_PATH('', {
		nodeSelection: {
			context: NodeContext.OBJ,
			types: [ObjType.GEO],
		},
		visibleIf: {collideWithGeo: true},
	});
	/** @param recompute colliding geo */
	recomputeCollidingGeo = ParamConfig.BUTTON(null, {
		callback: (node: BaseNodeType) => {
			MobileJoystickControlsEventNode.PARAM_CALLBACK_recomputeCollidingGeo(
				node as MobileJoystickControlsEventNode
			);
		},
		visibleIf: {collideWithGeo: true},
	});
	/** @param capsule height range */
	capsuleHeightRange = ParamConfig.VECTOR2([0.3, 1], {
		visibleIf: {collideWithGeo: true},
	});
	/** @param capsule radius */
	capsuleRadius = ParamConfig.FLOAT(0.3, {
		visibleIf: {collideWithGeo: true},
	});
}
const ParamsConfig = new MobileJoystickEventParamsConfig();

export class MobileJoystickControlsEventNode extends TypedCameraControlsEventNode<MobileJoystickEventParamsConfig> {
	paramsConfig = ParamsConfig;
	static type() {
		return CameraControlsNodeType.MOBILE_JOYSTICK;
	}
	endEventName() {
		return 'end';
	}
	initializeNode() {
		this.io.outputs.setNamedOutputConnectionPoints([
			new EventConnectionPoint(EVENT_START, EventConnectionPointType.BASE),
			new EventConnectionPoint(EVENT_CHANGE, EventConnectionPointType.BASE),
			new EventConnectionPoint(EVENT_END, EventConnectionPointType.BASE),
		]);
	}

	private _controls_by_element_id: MobileJoystickControlsMap = new Map();

	async create_controls_instance(camera: Camera, element: HTMLElement) {
		const controls = new MobileJoystickControls(camera, element);

		this._controls_by_element_id.set(element.id, controls);
		this._bind_listeners_to_controls_instance(controls);
		return controls;
	}

	protected _bind_listeners_to_controls_instance(controls: MobileJoystickControls) {
		controls.addEventListener(EVENT_START, () => {
			this.dispatchEventToOutput(EVENT_START, {});
		});
		controls.addEventListener(EVENT_CHANGE, () => {
			this.dispatchEventToOutput(EVENT_CHANGE, {});
		});
		controls.addEventListener(EVENT_END, () => {
			this.dispatchEventToOutput(EVENT_END, {});
		});
	}

	update_required() {
		return true;
	}

	setup_controls(controls: MobileJoystickControls) {
		controls.setRotationSpeed(this.pv.rotationSpeed);
		controls.setRotationRange({min: this.pv.minPolarAngle, max: this.pv.maxPolarAngle});
		controls.setTranslationSpeed(this.pv.translationSpeed);

		this._setupCollisionGeo(controls);
	}
	private async _setupCollisionGeo(controls: MobileJoystickControls) {
		if (isBooleanTrue(this.pv.collideWithGeo)) {
			const objNode = this.pv.collidingGeo.nodeWithContext(NodeContext.OBJ);
			if (objNode) {
				const displayNode = await objNode.displayNodeController?.displayNode();
				displayNode?.compute();
				const object = objNode.object;
				controls.setCheckCollisions(object);
				controls.setCollisionCapsule(
					new Capsule(
						new Vector3(0, this.pv.capsuleHeightRange.x, 0),
						new Vector3(this.pv.capsuleHeightRange.y),
						this.pv.capsuleRadius
					)
				);
			}
		} else {
			controls.setCheckCollisions();
		}
	}

	dispose_controls_for_html_element_id(html_element_id: string) {
		const controls = this._controls_by_element_id.get(html_element_id);
		if (controls) {
			this._controls_by_element_id.delete(html_element_id);
		}
	}

	static PARAM_CALLBACK_recomputeCollidingGeo(node: MobileJoystickControlsEventNode) {
		node._recomputeCollidingGeo();
	}
	private _recomputeCollidingGeo() {
		this._controls_by_element_id.forEach((controls, id) => {
			this._setupCollisionGeo(controls);
		});
	}
}