import {Vector4} from 'three';
import {QuadObject} from '../QuadObject';
import {QuadPrimitive} from '../QuadPrimitive';
import {QuadGraph} from './QuadGraph';
import {Number4} from '../../../../../types/GlobalTypes';

const _v4 = new Vector4();

export function quadGraphFromQuadObject(object: QuadObject) {
	const quadGraph = new QuadGraph();
	const indices = object.geometry.index;
	const primitivesCount = QuadPrimitive.entitiesCount(object);
	for (let i = 0; i < primitivesCount; i++) {
		_v4.fromArray(indices, i * 4);
		quadGraph.addQuad(i, _v4.toArray() as Number4);
	}
	return quadGraph;
}
