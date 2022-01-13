import {BaseSopOperation} from './_Base';
import {DefaultOperationParams} from '../_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {Vector2} from 'three/src/math/Vector2';
import {Vector3} from 'three/src/math/Vector3';
import {Vector4} from 'three/src/math/Vector4';
import {ATTRIBUTE_CLASSES, AttribClass, AttribType, ATTRIBUTE_TYPES} from '../../../core/geometry/Constant';
import {InputCloneMode} from '../../../engine/poly/InputCloneMode';
import {TypeAssert} from '../../../engine/poly/Assert';
import {CoreObject} from '../../../core/geometry/Object';
import {CoreAttribute} from '../../../core/geometry/Attribute';

interface AttribSetAtIndexSopParams extends DefaultOperationParams {
	index: number;
	class: number;
	type: number;
	name: string;
	size: number;
	value1: number;
	value2: Vector2;
	value3: Vector3;
	value4: Vector4;
	string: string;
}

export class AttribSetAtIndexSopOperation extends BaseSopOperation {
	static readonly DEFAULT_PARAMS: AttribSetAtIndexSopParams = {
		index: 0,
		class: ATTRIBUTE_CLASSES.indexOf(AttribClass.VERTEX),
		type: ATTRIBUTE_TYPES.indexOf(AttribType.NUMERIC),
		name: 'new_attrib',
		size: 1,
		value1: 0,
		value2: new Vector2(0, 0),
		value3: new Vector3(0, 0, 0),
		value4: new Vector4(0, 0, 0, 0),
		string: '',
	};
	static readonly INPUT_CLONED_STATE = InputCloneMode.FROM_NODE;
	static type(): Readonly<'attribSetAtIndex'> {
		return 'attribSetAtIndex';
	}

	cook(inputCoreGroups: CoreGroup[], params: AttribSetAtIndexSopParams) {
		const coreGroup = inputCoreGroups[0];
		const attribName = params.name;
		if (attribName && attribName.trim() != '') {
			this._addAttribute(ATTRIBUTE_CLASSES[params.class], coreGroup, params);
		} else {
			this.states?.error.set('attribute name is not valid');
		}
		return coreGroup;
	}
	private _addAttribute(attribClass: AttribClass, coreGroup: CoreGroup, params: AttribSetAtIndexSopParams) {
		const attrib_type = ATTRIBUTE_TYPES[params.type];
		switch (attribClass) {
			case AttribClass.VERTEX:
				this._addPointAttribute(attrib_type, coreGroup, params);
				return;
			case AttribClass.OBJECT:
				this._addObjectAttribute(attrib_type, coreGroup, params);
				return;
		}
		TypeAssert.unreachable(attribClass);
	}

	private _addPointAttribute(attribType: AttribType, coreGroup: CoreGroup, params: AttribSetAtIndexSopParams) {
		const coreObjects = coreGroup.coreObjects();
		switch (attribType) {
			case AttribType.NUMERIC: {
				for (let coreObject of coreObjects) {
					this._addNumericAttributeToPoints(coreObject, params);
				}
				return;
			}
			case AttribType.STRING: {
				for (let coreObject of coreObjects) {
					this._addStringAttributeToPoints(coreObject, params);
				}
				return;
			}
		}
		TypeAssert.unreachable(attribType);
	}
	private _addObjectAttribute(attribType: AttribType, coreGroup: CoreGroup, params: AttribSetAtIndexSopParams) {
		const allCoreObjects = coreGroup.coreObjects();

		// add attrib if non existent
		const attribName = params.name;
		const defaultValue = AttribSetAtIndexSopOperation.defaultAttribValue(params);
		if (defaultValue != null) {
			for (let coreObject of allCoreObjects) {
				if (!coreObject.hasAttrib(attribName)) {
					coreObject.setAttribValue(attribName, defaultValue);
				}
			}
		}
		const coreObject = allCoreObjects[params.index];
		if (!coreObject) {
			return;
		}
		switch (attribType) {
			case AttribType.NUMERIC:
				this._addNumericAttributeToObject(coreObject, params);
				return;
			case AttribType.STRING:
				this._addStringAttributeToObject(coreObject, params);
				return;
		}
		TypeAssert.unreachable(attribType);
	}

	private _addNumericAttributeToPoints(coreObject: CoreObject, params: AttribSetAtIndexSopParams) {
		const coreGeometry = coreObject.coreGeometry();
		if (!coreGeometry) {
			return;
		}
		const attribName = CoreAttribute.remapName(params.name);
		if (!coreGeometry.hasAttrib(attribName)) {
			coreGeometry.addNumericAttrib(attribName, params.size, 0);
		}

		const attrib = coreGeometry.geometry().attributes[attribName];
		const array = attrib.array as number[];
		const {index, size} = params;
		switch (size) {
			case 1: {
				if (index < array.length) {
					array[index] = params.value1;
					attrib.needsUpdate = true;
				}
				break;
			}
			case 2: {
				const i2 = index * 2;
				if (i2 < array.length) {
					params.value2.toArray(array, i2);
					attrib.needsUpdate = true;
				}
				break;
			}
			case 3: {
				const i3 = index * 3;
				if (i3 < array.length) {
					params.value3.toArray(array, i3);
					attrib.needsUpdate = true;
				}
				break;
			}
			case 4: {
				const i4 = index * 4;
				if (i4 < array.length) {
					params.value4.toArray(array, i4);
					attrib.needsUpdate = true;
				}
				break;
			}
		}
	}

	private _addNumericAttributeToObject(coreObject: CoreObject, params: AttribSetAtIndexSopParams) {
		const value = [params.value1, params.value2, params.value3, params.value4][params.size - 1];
		const attribName = params.name;
		coreObject.setAttribValue(attribName, value);
	}

	private _addStringAttributeToPoints(coreObject: CoreObject, params: AttribSetAtIndexSopParams) {
		const coreGeometry = coreObject.coreGeometry();
		if (!coreGeometry) {
			return;
		}

		const attribName = params.name;
		// create attrib if non existent
		if (!coreGeometry.hasAttrib(attribName)) {
			const tmpIndexData = CoreAttribute.arrayToIndexedArrays(['']);
			coreGeometry.setIndexedAttribute(attribName, tmpIndexData['values'], tmpIndexData['indices']);
		}

		const value = params.string;

		const points = coreObject.points();
		const indexPoint = points[params.index];
		let stringValues: string[] = new Array(points.length);

		// We prefill the existing stringValues
		const allPoints = coreObject.points();
		stringValues = stringValues.length != allPoints.length ? new Array(allPoints.length) : stringValues;

		for (let point of allPoints) {
			let currentValue = point.stringAttribValue(attribName);
			if (currentValue == null) {
				currentValue = '';
			}
			stringValues[point.index()] = currentValue;
		}

		if (indexPoint) {
			stringValues[indexPoint.index()] = value;
		}

		const indexData = CoreAttribute.arrayToIndexedArrays(stringValues);

		coreGeometry.setIndexedAttribute(attribName, indexData['values'], indexData['indices']);
	}

	private _addStringAttributeToObject(coreObject: CoreObject, params: AttribSetAtIndexSopParams) {
		const value = params.string;
		coreObject.setAttribValue(params.name, value);
	}

	//
	//
	// INTERNAL UTILS
	//
	//
	private static _attribType(params: AttribSetAtIndexSopParams) {
		return ATTRIBUTE_TYPES[params.type];
	}

	static defaultAttribValue(params: AttribSetAtIndexSopParams) {
		const attribType = this._attribType(params);
		switch (attribType) {
			case AttribType.NUMERIC: {
				return this._defaultNumericValue(params);
			}
			case AttribType.STRING: {
				return this._defaultStringValue();
			}
		}
		TypeAssert.unreachable(attribType);
	}
	private static _defaultStringValue() {
		return '';
	}
	private static _defaultNumericValue(params: AttribSetAtIndexSopParams) {
		const size = params.size;
		switch (size) {
			case 1:
				return 0;
			case 2:
				return new Vector2(0, 0);
			case 3:
				return new Vector3(0, 0, 0);
			case 4:
				return new Vector4(0, 0, 0, 0);
		}
	}
}