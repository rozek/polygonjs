import {AttribValue, NumericAttribValue} from '../../types/GlobalTypes';
import {Vector2, Vector3, Vector4} from 'three';
import {CoreObjectType, ObjectBuilder} from './ObjectContent';
import {AttribClass} from './Constant';
import type {CoreGroup} from './Group';
export abstract class CoreEntity {
	protected _index: number = 0;
	constructor(content?: any, index?: number) {
		if (index != null) {
			this._index = index;
		}
	}

	index() {
		return this._index;
	}
	setIndex(index: number) {
		this._index = index;
		return this;
	}

	abstract geometry(): any;
	abstract builder<T extends CoreObjectType>(): ObjectBuilder<T> | undefined;
	abstract setAttribValue(attribName: string, attribValue: NumericAttribValue | string): void;
	abstract attribValue(attribName: string, target?: Vector2 | Vector3 | Vector4): AttribValue | undefined;
	abstract stringAttribValue(attribName: string): string | null;
	abstract position(target: Vector3): Vector3;
	abstract relatedEntities(attribClass: AttribClass, coreGroup: CoreGroup, target: CoreEntity[]): void;
}
