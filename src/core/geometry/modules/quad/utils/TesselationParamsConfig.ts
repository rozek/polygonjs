import {ParamConfig} from '../../../../../engine/nodes/utils/params/ParamsConfig';
import {BaseNodeType} from '../../../../../engine/nodes/_Base';
import {Constructor} from '../../../../../types/GlobalTypes';

export function SOPQUADTesselationParamConfig<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		/** @param triangles */
		triangles = ParamConfig.BOOLEAN(true);
		/** @param wireframe */
		wireframe = ParamConfig.BOOLEAN(true);
		/** @param wireframe color */
		wireframeColor = ParamConfig.COLOR([0, 0, 0], {
			visibleIf: {wireframe: true},
		});
		/** @param center */
		center = ParamConfig.BOOLEAN(false);
		/** @param innerRadius */
		innerRadius = ParamConfig.BOOLEAN(false, {
			visibleIf: {center: true},
		});
		/** @param outerRadius */
		outerRadius = ParamConfig.BOOLEAN(false, {
			visibleIf: {center: true},
		});
	};
}

export function OBJQUADTesselationParamConfig<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		/** @param wireframe */
		QUADTriangles = ParamConfig.BOOLEAN(true);
		/** @param wireframe */
		QUADWireframe = ParamConfig.BOOLEAN(true);
		/** @param wireframe color */
		QUADWireframeColor = ParamConfig.COLOR([0, 0, 0], {
			visibleIf: {QUADWireframe: true},
		});
		/** @param center */
		QUADCenter = ParamConfig.BOOLEAN(false);
		/** @param QUADInnerRadius */
		QUADInnerRadius = ParamConfig.BOOLEAN(false, {
			visibleIf: {center: true},
		});
		/** @param QUADOuterRadius */
		QUADOuterRadius = ParamConfig.BOOLEAN(false, {
			visibleIf: {center: true},
		});
	};
}

export const TESSELATION_PARAM_NAMES = new Set<string>(['QUADTriangles', 'QUADWireframe']);

export function addQUADTesselationParamsCallback(node: BaseNodeType, callback: () => void) {
	node.params.onParamsCreated('QUADtesselationParamsHooks', () => {
		const params = node.params.all;
		for (const param of params) {
			if (TESSELATION_PARAM_NAMES.has(param.name())) {
				param.options.setOption('callback', callback);
			}
		}
	});
}
