import {BaseSopOperation} from './_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {InputCloneMode} from '../../../engine/poly/InputCloneMode';
import {DefaultOperationParams} from '../../../core/operations/_Base';
import {CoreObject} from '../../../core/geometry/Object';
import {CameraAttribute} from '../../../core/camera/CoreCamera';
import {CameraSopNodeType} from '../../poly/NodeContext';
import {Camera, Object3D, WebGLRenderer} from 'three';
import {PolyScene} from '../../scene/PolyScene';
import {CoreWebXRARController} from '../../../core/webXR/webXRAR/CoreWebXRARController';
import {CoreWebXRARControllerOptions, WebXRARFeature} from '../../../core/webXR/webXRAR/CommonAR';
import {
	WebXRFeatureStatus,
	WEBXR_FEATURE_STATUSES,
	WEBXR_FEATURE_STATUS_OPTIONAL_INDEX,
} from '../../../core/webXR/Common';
import {TypeAssert} from '../../poly/Assert';

interface CameraWebXRARSopParams extends DefaultOperationParams {
	hitTest: number;
	lightEstimation: number;
}

interface UpdateObjectOptions {
	scene: PolyScene;
	objects: Object3D[];
	params: CameraWebXRARSopParams;
	active: boolean;
}

export class CameraWebXRARSopOperation extends BaseSopOperation {
	static override readonly DEFAULT_PARAMS: CameraWebXRARSopParams = {
		hitTest: WEBXR_FEATURE_STATUS_OPTIONAL_INDEX,
		lightEstimation: WEBXR_FEATURE_STATUS_OPTIONAL_INDEX,
	};
	static override readonly INPUT_CLONED_STATE = InputCloneMode.FROM_NODE;
	static override type(): Readonly<CameraSopNodeType.WEBXR_AR> {
		return CameraSopNodeType.WEBXR_AR;
	}
	override cook(inputCoreGroups: CoreGroup[], params: CameraWebXRARSopParams) {
		const objects = inputCoreGroups[0].objects();

		if (this._node) {
			CameraWebXRARSopOperation.updateObject({scene: this._node.scene(), objects, params, active: true});
		}

		return this.createCoreGroupFromObjects(objects);
	}
	static updateObject(options: UpdateObjectOptions) {
		const {scene, objects, params, active} = options;
		scene.webXR.setARControllerCreationFunction(function (
			renderer: WebGLRenderer,
			camera: Camera,
			canvas: HTMLCanvasElement,
			options: CoreWebXRARControllerOptions
		) {
			return new CoreWebXRARController(scene, renderer, camera, canvas, options);
		});

		const optionalFeatures: WebXRARFeature[] = [];
		const requiredFeatures: WebXRARFeature[] = [];
		function assignFeatureByStatus(feature: WebXRARFeature, featureStatusIndex: number) {
			const featureStatus = WEBXR_FEATURE_STATUSES[featureStatusIndex] || WebXRFeatureStatus.NOT_USED;
			switch (featureStatus) {
				case WebXRFeatureStatus.NOT_USED: {
					return;
				}
				case WebXRFeatureStatus.OPTIONAL: {
					optionalFeatures.push(feature);
					return;
				}
				case WebXRFeatureStatus.REQUIRED: {
					requiredFeatures.push(feature);
					return;
				}
			}
			TypeAssert.unreachable(featureStatus);
		}
		assignFeatureByStatus(WebXRARFeature.HIT_TEST, params.hitTest);
		assignFeatureByStatus(WebXRARFeature.LIGHT_ESTIMATION, params.lightEstimation);

		const optionalFeaturesStr = optionalFeatures.join(' ');
		const requiredFeaturesStr = requiredFeatures.join(' ');
		for (let object of objects) {
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR, active);
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_FEATURES_OPTIONAL, optionalFeaturesStr);
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_FEATURES_REQUIRED, requiredFeaturesStr);
		}
	}
}