import {Object3D} from 'three';
import {ConvertToStrings} from '../../../../../types/GlobalTypes';
import {BaseRayObjectIntersectionsController} from './_BaseRayObjectIntersectionsController';
import {
	ObjectOptions,
	GPUOptions,
	CPUOptions,
	PriorityOptions,
	ButtonAndModifierOptions,
	ButtonAndModifierOptionsAsString,
	filterObjectsWithMatchEventConfig,
	EventConfig,
	eventConfigFromEvent,
	propertyMatchesEventConfig,
} from './Common';
import {MouseButton} from '../../../../../core/MouseButton';

interface PointerupOptions {
	callback: () => void;
}
export interface ObjectToPointerupOptions extends ObjectOptions {
	pointerup: PointerupOptions;
	config: ButtonAndModifierOptions;
}
export interface ObjectToPointerupOptionsAsString {
	priority: ConvertToStrings<PriorityOptions>;
	cpu?: ConvertToStrings<CPUOptions>;
	gpu?: ConvertToStrings<GPUOptions>;
	pointerup: ConvertToStrings<PointerupOptions>;
	config: ButtonAndModifierOptionsAsString;
}

const _eventConfig: EventConfig = {button: MouseButton.LEFT, ctrl: false, shift: false, alt: false};

export class RayObjectIntersectionsPointerupController extends BaseRayObjectIntersectionsController {
	protected override _propertiesListByObject: Map<Object3D, ObjectToPointerupOptions[]> = new Map();
	protected _intersectedStateByObject: Map<Object3D, boolean> = new Map();
	private _objectsMatchingEventConfig: Object3D[] = [];

	// private _processBound = this._process.bind(this);
	onPointerup(event: Readonly<PointerEvent | MouseEvent | TouchEvent>) {
		filterObjectsWithMatchEventConfig(
			event,
			this._objects,
			this._propertiesListByObject,
			this._objectsMatchingEventConfig
		);
		if (this._objectsMatchingEventConfig.length == 0) {
			return;
		}
		this._setIntersectedState(this._objectsMatchingEventConfig, this._intersectedStateByObject);
		eventConfigFromEvent(event, _eventConfig);

		const objects = this._objects;

		for (const object of objects) {
			const propertiesList = this._propertiesListByObject.get(object);
			if (propertiesList) {
				const isIntersecting = this._intersectedStateByObject.get(object);
				if (isIntersecting == true) {
					for (const properties of propertiesList) {
						if (propertyMatchesEventConfig(properties.config, _eventConfig)) {
							properties.pointerup.callback();
						}
					}
				}
			}
		}
	}
}
