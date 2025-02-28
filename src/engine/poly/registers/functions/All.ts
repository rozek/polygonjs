import type { PolyEngine } from "../../../Poly";
import type { Color, Vector2, Vector3, Vector4 } from "three";
import type {
	PrimitiveArrayElement,
	VectorArrayElement,
	ParamConvertibleJsType,
} from "../../../nodes/utils/io/connections/Js";
import type { MathArrayVectorElement } from "../../../functions/_MathGeneric";
//

import { addAudioStopEventListener } from "../../../functions/addAudioStopEventListener";
import { addNumber } from "../../../functions/addNumber";
import { addObjectToClickCheck } from "../../../functions/addObjectToClickCheck";
import { addObjectToContextmenuCheck } from "../../../functions/addObjectToContextmenuCheck";
import { addObjectToHoveredCheck } from "../../../functions/addObjectToHoveredCheck";
import { addObjectToLongPressCheck } from "../../../functions/addObjectToLongPressCheck";
import { addObjectToPointerdownCheck } from "../../../functions/addObjectToPointerdownCheck";
import { addObjectToPointerupCheck } from "../../../functions/addObjectToPointerupCheck";
import { addObjectToSwipeCheck } from "../../../functions/addObjectToSwipeCheck";
import { addVector } from "../../../functions/addVector";
import { addVectorNumber } from "../../../functions/addVectorNumber";
import { addVideoEventListener } from "../../../functions/addVideoEventListener";
import { andArrays } from "../../../functions/andArrays";
import { andBooleans } from "../../../functions/andBooleans";
import { animationActionCrossFade } from "../../../functions/animationActionCrossFade";
import { animationActionFadeIn } from "../../../functions/animationActionFadeIn";
import { animationActionFadeOut } from "../../../functions/animationActionFadeOut";
import { animationActionPlay } from "../../../functions/animationActionPlay";
import { animationActionStop } from "../../../functions/animationActionStop";
import { animationMixerUpdate } from "../../../functions/animationMixerUpdate";
import { arrayElementPrimitive } from "../../../functions/arrayElementPrimitive";
import { arrayElementVector } from "../../../functions/arrayElementVector";
import { arrayLength } from "../../../functions/arrayLength";
import { arrayPopPrimitive } from "../../../functions/arrayPopPrimitive";
import { arrayPopVector } from "../../../functions/arrayPopVector";
import { arrayShiftPrimitive } from "../../../functions/arrayShiftPrimitive";
import { arrayShiftVector } from "../../../functions/arrayShiftVector";
import { boolToInt } from "../../../functions/boolToInt";
import { box3ContainsPoint } from "../../../functions/box3ContainsPoint";
import { box3IntersectsBox3 } from "../../../functions/box3IntersectsBox3";
import { box3Set } from "../../../functions/box3Set";
import { box3SetFromObject } from "../../../functions/box3SetFromObject";
import { catmullRomCurve3GetPoint } from "../../../functions/catmullRomCurve3GetPoint";
import { channelFloat } from "../../../functions/channelFloat";
import { channelValueFloat } from "../../../functions/channelValueFloat";
import { channelValueVector2 } from "../../../functions/channelValueVector2";
import { channelValueVector3 } from "../../../functions/channelValueVector3";
import { channelValueVector4 } from "../../../functions/channelValueVector4";
import { channelVector2 } from "../../../functions/channelVector2";
import { channelVector3 } from "../../../functions/channelVector3";
import { channelVector4 } from "../../../functions/channelVector4";
import { clamp } from "../../../functions/clamp";
import { clothConstraintSetPosition } from "../../../functions/clothConstraintSetPosition";
import { clothCreateConstraint } from "../../../functions/clothCreateConstraint";
import { clothDeleteConstraint } from "../../../functions/clothDeleteConstraint";
import { clothSolverReset } from "../../../functions/clothSolverReset";
import { clothSolverStepSimulation } from "../../../functions/clothSolverStepSimulation";
import { clothSolverUpdateMaterial } from "../../../functions/clothSolverUpdateMaterial";
import { colorSetRGB } from "../../../functions/colorSetRGB";
import { colorToVec3 } from "../../../functions/colorToVec3";
import { complement } from "../../../functions/complement";
import { computeVelocity } from "../../../functions/computeVelocity";
import { cookNode } from "../../../functions/cookNode";
import { createObject } from "../../../functions/createObject";
import { createObjects } from "../../../functions/createObjects";
import { createPhysicsRBD } from "../../../functions/createPhysicsRBD";
import { createPhysicsRBDKinematicConstraint } from "../../../functions/createPhysicsRBDKinematicConstraint";
import { createPhysicsRBDs } from "../../../functions/createPhysicsRBDs";
import { createScrollListener } from "../../../functions/createScrollListener";
import { crossVector2 } from "../../../functions/crossVector2";
import { crossVector3 } from "../../../functions/crossVector3";
import { cubeLatticeDeform } from "../../../functions/cubeLatticeDeform";
import { cursorToUv } from "../../../functions/cursorToUv";
import { debug } from "../../../functions/debug";
import { degToRad } from "../../../functions/degToRad";
import { deletePhysicsRBDConstraints } from "../../../functions/deletePhysicsRBDConstraints";
import { deletePhysicsRBDKinematicConstraint } from "../../../functions/deletePhysicsRBDKinematicConstraint";
import { deviceOrientation } from "../../../functions/deviceOrientation";
import { distanceVector2 } from "../../../functions/distanceVector2";
import { distanceVector3 } from "../../../functions/distanceVector3";
import { divideNumber } from "../../../functions/divideNumber";
import { divideVectorNumber } from "../../../functions/divideVectorNumber";
import { dotVector2 } from "../../../functions/dotVector2";
import { dotVector3 } from "../../../functions/dotVector3";
import { easeElasticI } from "../../../functions/easeElasticI";
import { easeElasticIO } from "../../../functions/easeElasticIO";
import { easeElasticO } from "../../../functions/easeElasticO";
import { easeI2 } from "../../../functions/easeI2";
import { easeI3 } from "../../../functions/easeI3";
import { easeI4 } from "../../../functions/easeI4";
import { easeIO2 } from "../../../functions/easeIO2";
import { easeIO3 } from "../../../functions/easeIO3";
import { easeIO4 } from "../../../functions/easeIO4";
import { easeO2 } from "../../../functions/easeO2";
import { easeO3 } from "../../../functions/easeO3";
import { easeO4 } from "../../../functions/easeO4";
import { easeSinI } from "../../../functions/easeSinI";
import { easeSinIO } from "../../../functions/easeSinIO";
import { easeSinO } from "../../../functions/easeSinO";
import { elementsToArrayPrimitive } from "../../../functions/elementsToArrayPrimitive";
import { elementsToArrayVector } from "../../../functions/elementsToArrayVector";
import { eulerSetFromQuaternion } from "../../../functions/eulerSetFromQuaternion";
import { eulerSetFromVector3 } from "../../../functions/eulerSetFromVector3";
import { fit } from "../../../functions/fit";
import { fitClamp } from "../../../functions/fitClamp";
import { floatToColor } from "../../../functions/floatToColor";
import { floatToInt } from "../../../functions/floatToInt";
import { floatToVec2 } from "../../../functions/floatToVec2";
import { floatToVec3 } from "../../../functions/floatToVec3";
import { floatToVec4 } from "../../../functions/floatToVec4";
import { geolocationCurrentPositionRef } from "../../../functions/geolocationCurrentPositionRef";
import { geolocationGetCurrentPosition } from "../../../functions/geolocationGetCurrentPosition";
import { geolocationLatitude } from "../../../functions/geolocationLatitude";
import { geolocationLongitude } from "../../../functions/geolocationLongitude";
import { getActorNodeParamValue } from "../../../functions/getActorNodeParamValue";
import { getAnimationAction } from "../../../functions/getAnimationAction";
import { getAnimationMixer } from "../../../functions/getAnimationMixer";
import { getBox3Center } from "../../../functions/getBox3Center";
import { getBox3Max } from "../../../functions/getBox3Max";
import { getBox3Min } from "../../../functions/getBox3Min";
import { getChildrenAttributes } from "../../../functions/getChildrenAttributes";
import { getChildrenAttributesPrevious } from "../../../functions/getChildrenAttributesPrevious";
import { getChildrenAttributesRef } from "../../../functions/getChildrenAttributesRef";
import { getChildrenPhysicsRBDPropertiesAngularDamping } from "../../../functions/getChildrenPhysicsRBDPropertiesAngularDamping";
import { getChildrenPhysicsRBDPropertiesAngularVelocity } from "../../../functions/getChildrenPhysicsRBDPropertiesAngularVelocity";
import { getChildrenPhysicsRBDPropertiesIsMoving } from "../../../functions/getChildrenPhysicsRBDPropertiesIsMoving";
import { getChildrenPhysicsRBDPropertiesIsSleeping } from "../../../functions/getChildrenPhysicsRBDPropertiesIsSleeping";
import { getChildrenPhysicsRBDPropertiesLinearDamping } from "../../../functions/getChildrenPhysicsRBDPropertiesLinearDamping";
import { getChildrenPhysicsRBDPropertiesLinearVelocity } from "../../../functions/getChildrenPhysicsRBDPropertiesLinearVelocity";
import { getChildrenPropertiesCastShadow } from "../../../functions/getChildrenPropertiesCastShadow";
import { getChildrenPropertiesFrustumCulled } from "../../../functions/getChildrenPropertiesFrustumCulled";
import { getChildrenPropertiesMatrixAutoUpdate } from "../../../functions/getChildrenPropertiesMatrixAutoUpdate";
import { getChildrenPropertiesPosition } from "../../../functions/getChildrenPropertiesPosition";
import { getChildrenPropertiesQuaternion } from "../../../functions/getChildrenPropertiesQuaternion";
import { getChildrenPropertiesReceiveShadow } from "../../../functions/getChildrenPropertiesReceiveShadow";
import { getChildrenPropertiesScale } from "../../../functions/getChildrenPropertiesScale";
import { getChildrenPropertiesUp } from "../../../functions/getChildrenPropertiesUp";
import { getChildrenPropertiesVisible } from "../../../functions/getChildrenPropertiesVisible";
import { getDefaultCamera } from "../../../functions/getDefaultCamera";
import { getGeometryBoundingBox } from "../../../functions/getGeometryBoundingBox";
import { getGeometryNodeObjects } from "../../../functions/getGeometryNodeObjects";
import { getGeometryPositions } from "../../../functions/getGeometryPositions";
import { getIntersectionAttributeColorInterpolated } from "../../../functions/getIntersectionAttributeColorInterpolated";
import { getIntersectionAttributeColorNearest } from "../../../functions/getIntersectionAttributeColorNearest";
import { getIntersectionAttributeNumberInterpolated } from "../../../functions/getIntersectionAttributeNumberInterpolated";
import { getIntersectionAttributeNumberNearest } from "../../../functions/getIntersectionAttributeNumberNearest";
import { getIntersectionAttributeStringNearest } from "../../../functions/getIntersectionAttributeStringNearest";
import { getIntersectionAttributeVector2Interpolated } from "../../../functions/getIntersectionAttributeVector2Interpolated";
import { getIntersectionAttributeVector2Nearest } from "../../../functions/getIntersectionAttributeVector2Nearest";
import { getIntersectionAttributeVector3Interpolated } from "../../../functions/getIntersectionAttributeVector3Interpolated";
import { getIntersectionAttributeVector3Nearest } from "../../../functions/getIntersectionAttributeVector3Nearest";
import { getIntersectionAttributeVector4Interpolated } from "../../../functions/getIntersectionAttributeVector4Interpolated";
import { getIntersectionAttributeVector4Nearest } from "../../../functions/getIntersectionAttributeVector4Nearest";
import { getIntersectionPropertyDistance } from "../../../functions/getIntersectionPropertyDistance";
import { getIntersectionPropertyNormal } from "../../../functions/getIntersectionPropertyNormal";
import { getIntersectionPropertyObject } from "../../../functions/getIntersectionPropertyObject";
import { getIntersectionPropertyPoint } from "../../../functions/getIntersectionPropertyPoint";
import { getIntersectionPropertyUv } from "../../../functions/getIntersectionPropertyUv";
import { getMaterial } from "../../../functions/getMaterial";
import { getNode } from "../../../functions/getNode";
import { getObject } from "../../../functions/getObject";
import { getObjectAttribute } from "../../../functions/getObjectAttribute";
import { getObjectAttributeAutoDefault } from "../../../functions/getObjectAttributeAutoDefault";
import { getObjectAttributePrevious } from "../../../functions/getObjectAttributePrevious";
import { getObjectAttributeRef } from "../../../functions/getObjectAttributeRef";
import { getObjectChild } from "../../../functions/getObjectChild";
import { getObjectLastDispatchedEventName } from "../../../functions/getObjectLastDispatchedEventName";
import { getObjectProperty } from "../../../functions/getObjectProperty";
import { getObjectUserData } from "../../../functions/getObjectUserData";
import { getObjectWorldPosition } from "../../../functions/getObjectWorldPosition";
import { getParam } from "../../../functions/getParam";
import { getParent } from "../../../functions/getParent";
import { getPhysicsRBD } from "../../../functions/getPhysicsRBD";
import { getPhysicsRBDAngularDamping } from "../../../functions/getPhysicsRBDAngularDamping";
import { getPhysicsRBDAngularVelocity } from "../../../functions/getPhysicsRBDAngularVelocity";
import { getPhysicsRBDCapsuleHeight } from "../../../functions/getPhysicsRBDCapsuleHeight";
import { getPhysicsRBDCapsuleRadius } from "../../../functions/getPhysicsRBDCapsuleRadius";
import { getPhysicsRBDConeHeight } from "../../../functions/getPhysicsRBDConeHeight";
import { getPhysicsRBDConeRadius } from "../../../functions/getPhysicsRBDConeRadius";
import { getPhysicsRBDCuboidSizes } from "../../../functions/getPhysicsRBDCuboidSizes";
import { getPhysicsRBDCylinderHeight } from "../../../functions/getPhysicsRBDCylinderHeight";
import { getPhysicsRBDCylinderRadius } from "../../../functions/getPhysicsRBDCylinderRadius";
import { getPhysicsRBDIsMoving } from "../../../functions/getPhysicsRBDIsMoving";
import { getPhysicsRBDIsSleeping } from "../../../functions/getPhysicsRBDIsSleeping";
import { getPhysicsRBDLinearDamping } from "../../../functions/getPhysicsRBDLinearDamping";
import { getPhysicsRBDLinearVelocity } from "../../../functions/getPhysicsRBDLinearVelocity";
import { getPhysicsRBDSphereRadius } from "../../../functions/getPhysicsRBDSphereRadius";
import { getPlaneConstant } from "../../../functions/getPlaneConstant";
import { getPlaneNormal } from "../../../functions/getPlaneNormal";
import { getPlayerInputDataBackward } from "../../../functions/getPlayerInputDataBackward";
import { getPlayerInputDataForward } from "../../../functions/getPlayerInputDataForward";
import { getPlayerInputDataJump } from "../../../functions/getPlayerInputDataJump";
import { getPlayerInputDataLeft } from "../../../functions/getPlayerInputDataLeft";
import { getPlayerInputDataRight } from "../../../functions/getPlayerInputDataRight";
import { getPlayerInputDataRun } from "../../../functions/getPlayerInputDataRun";
import { getPlayerSimplePropertyOnGround } from "../../../functions/getPlayerSimplePropertyOnGround";
import { getPlayerSimplePropertyVelocity } from "../../../functions/getPlayerSimplePropertyVelocity";
import { getPointAttributeNumber } from "../../../functions/getPointAttributeNumber";
import { getPointAttributeVector2 } from "../../../functions/getPointAttributeVector2";
import { getPointAttributeVector3 } from "../../../functions/getPointAttributeVector3";
import { getPointAttributeVector4 } from "../../../functions/getPointAttributeVector4";
import { getPointIndex } from "../../../functions/getPointIndex";
import { getPointInstancePosition } from "../../../functions/getPointInstancePosition";
import { getPointInstanceQuaternion } from "../../../functions/getPointInstanceQuaternion";
import { getPointInstanceScale } from "../../../functions/getPointInstanceScale";
import { getPointPosition } from "../../../functions/getPointPosition";
import { getRayDirection } from "../../../functions/getRayDirection";
import { getRayOrigin } from "../../../functions/getRayOrigin";
import { getSibbling } from "../../../functions/getSibbling";
import { getSphereCenter } from "../../../functions/getSphereCenter";
import { getSphereRadius } from "../../../functions/getSphereRadius";
import { getTexture } from "../../../functions/getTexture";
import { getTrackedHandIndexDirection } from "../../../functions/getTrackedHandIndexDirection";
import { getTrackedHandMiddleDirection } from "../../../functions/getTrackedHandMiddleDirection";
import { getTrackedHandPinkyDirection } from "../../../functions/getTrackedHandPinkyDirection";
import { getTrackedHandRingDirection } from "../../../functions/getTrackedHandRingDirection";
import { getTrackedHandThumbDirection } from "../../../functions/getTrackedHandThumbDirection";
import { getVideoPropertyCurrentTime } from "../../../functions/getVideoPropertyCurrentTime";
import { getVideoPropertyDuration } from "../../../functions/getVideoPropertyDuration";
import { getVideoPropertyMuted } from "../../../functions/getVideoPropertyMuted";
import { getVideoPropertyPlaying } from "../../../functions/getVideoPropertyPlaying";
import { getWebXRARHitDetected } from "../../../functions/getWebXRARHitDetected";
import { getWebXRARHitMatrix } from "../../../functions/getWebXRARHitMatrix";
import { getWebXRARHitPosition } from "../../../functions/getWebXRARHitPosition";
import { getWebXRARHitQuaternion } from "../../../functions/getWebXRARHitQuaternion";
import { getWebXRControllerAngularVelocity } from "../../../functions/getWebXRControllerAngularVelocity";
import { getWebXRControllerHasAngularVelocity } from "../../../functions/getWebXRControllerHasAngularVelocity";
import { getWebXRControllerHasLinearVelocity } from "../../../functions/getWebXRControllerHasLinearVelocity";
import { getWebXRControllerLinearVelocity } from "../../../functions/getWebXRControllerLinearVelocity";
import { getWebXRControllerObject } from "../../../functions/getWebXRControllerObject";
import { getWebXRControllerRay } from "../../../functions/getWebXRControllerRay";
import { getWebXRTrackedMarkerMatrix } from "../../../functions/getWebXRTrackedMarkerMatrix";
import { globalsCursor } from "../../../functions/globalsCursor";
import { globalsRaycaster } from "../../../functions/globalsRaycaster";
import { globalsRayFromCursor } from "../../../functions/globalsRayFromCursor";
import { globalsTime } from "../../../functions/globalsTime";
import { globalsTimeDelta } from "../../../functions/globalsTimeDelta";
import { hsvToRgb } from "../../../functions/hsvToRgb";
import { importPrimitiveAttributeNumber } from "../../../functions/importPrimitiveAttributeNumber";
import { intToBool } from "../../../functions/intToBool";
import { intToFloat } from "../../../functions/intToFloat";
import { isTouchDevice } from "../../../functions/isTouchDevice";
import { keyboardEventMatchesConfig } from "../../../functions/keyboardEventMatchesConfig";
import { lengthVector } from "../../../functions/lengthVector";
import { lengthVectorArray } from "../../../functions/lengthVectorArray";
import { lerpColor } from "../../../functions/lerpColor";
import { lerpNumber } from "../../../functions/lerpNumber";
import { lerpQuaternion } from "../../../functions/lerpQuaternion";
import { lerpVector2 } from "../../../functions/lerpVector2";
import { lerpVector3 } from "../../../functions/lerpVector3";
import { lerpVector4 } from "../../../functions/lerpVector4";
import { manhattanDistanceVector2 } from "../../../functions/manhattanDistanceVector2";
import { manhattanDistanceVector3 } from "../../../functions/manhattanDistanceVector3";
import { mathColor_1 } from "../../../functions/mathColor_1";
import { mathColor_2 } from "../../../functions/mathColor_2";
import { mathColor_3 } from "../../../functions/mathColor_3";
import { mathColor_3vvf } from "../../../functions/mathColor_3vvf";
import { mathColor_4 } from "../../../functions/mathColor_4";
import { mathColor_5 } from "../../../functions/mathColor_5";
import { mathFloat_1 } from "../../../functions/mathFloat_1";
import { mathFloat_2 } from "../../../functions/mathFloat_2";
import { mathFloat_3 } from "../../../functions/mathFloat_3";
import { mathFloat_4 } from "../../../functions/mathFloat_4";
import { mathFloat_5 } from "../../../functions/mathFloat_5";
import { mathPrimArray_1 } from "../../../functions/mathPrimArray_1";
import { mathPrimArray_2 } from "../../../functions/mathPrimArray_2";
import { mathPrimArray_3 } from "../../../functions/mathPrimArray_3";
import { mathPrimArray_4 } from "../../../functions/mathPrimArray_4";
import { mathPrimArray_5 } from "../../../functions/mathPrimArray_5";
import { mathVector2_1 } from "../../../functions/mathVector2_1";
import { mathVector2_2 } from "../../../functions/mathVector2_2";
import { mathVector2_3 } from "../../../functions/mathVector2_3";
import { mathVector2_3vvf } from "../../../functions/mathVector2_3vvf";
import { mathVector2_4 } from "../../../functions/mathVector2_4";
import { mathVector2_5 } from "../../../functions/mathVector2_5";
import { mathVector3_1 } from "../../../functions/mathVector3_1";
import { mathVector3_2 } from "../../../functions/mathVector3_2";
import { mathVector3_3 } from "../../../functions/mathVector3_3";
import { mathVector3_3vvf } from "../../../functions/mathVector3_3vvf";
import { mathVector3_4 } from "../../../functions/mathVector3_4";
import { mathVector3_5 } from "../../../functions/mathVector3_5";
import { mathVector4_1 } from "../../../functions/mathVector4_1";
import { mathVector4_2 } from "../../../functions/mathVector4_2";
import { mathVector4_3 } from "../../../functions/mathVector4_3";
import { mathVector4_3vvf } from "../../../functions/mathVector4_3vvf";
import { mathVector4_4 } from "../../../functions/mathVector4_4";
import { mathVector4_5 } from "../../../functions/mathVector4_5";
import { mathVectorArray_1 } from "../../../functions/mathVectorArray_1";
import { mathVectorArray_2 } from "../../../functions/mathVectorArray_2";
import { mathVectorArray_3 } from "../../../functions/mathVectorArray_3";
import { mathVectorArray_4 } from "../../../functions/mathVectorArray_4";
import { mathVectorArray_5 } from "../../../functions/mathVectorArray_5";
import { matrix4LookAt } from "../../../functions/matrix4LookAt";
import { matrix4MakeTranslation } from "../../../functions/matrix4MakeTranslation";
import { matrix4Multiply } from "../../../functions/matrix4Multiply";
import { maxLengthVector2 } from "../../../functions/maxLengthVector2";
import { maxLengthVector3 } from "../../../functions/maxLengthVector3";
import { maxLengthVector4 } from "../../../functions/maxLengthVector4";
import { mix } from "../../../functions/mix";
import { mod } from "../../../functions/mod";
import { multAdd } from "../../../functions/multAdd";
import { multNumber } from "../../../functions/multNumber";
import { multScalarArrayVectorArray } from "../../../functions/multScalarArrayVectorArray";
import { multScalarColor } from "../../../functions/multScalarColor";
import { multScalarVector2 } from "../../../functions/multScalarVector2";
import { multScalarVector3 } from "../../../functions/multScalarVector3";
import { multScalarVector4 } from "../../../functions/multScalarVector4";
import { multScalarVectorArray } from "../../../functions/multScalarVectorArray";
import { multVector } from "../../../functions/multVector";
import { multVectorNumber } from "../../../functions/multVectorNumber";
import { nearestPosition } from "../../../functions/nearestPosition";
import { negate } from "../../../functions/negate";
import { noiseImprovedVector3 } from "../../../functions/noiseImprovedVector3";
import { noiseSimplexVector2 } from "../../../functions/noiseSimplexVector2";
import { noiseSimplexVector3 } from "../../../functions/noiseSimplexVector3";
import { noiseSimplexVector4 } from "../../../functions/noiseSimplexVector4";
import { normalizeVector2 } from "../../../functions/normalizeVector2";
import { normalizeVector3 } from "../../../functions/normalizeVector3";
import { normalizeVector4 } from "../../../functions/normalizeVector4";
import { object3DLocalToWorld } from "../../../functions/object3DLocalToWorld";
import { object3DWorldToLocal } from "../../../functions/object3DWorldToLocal";
import { objectAddEventListeners } from "../../../functions/objectAddEventListeners";
import { objectAddOnBeforeDeleteEventListener } from "../../../functions/objectAddOnBeforeDeleteEventListener";
import { objectDelete } from "../../../functions/objectDelete";
import { objectDispatchEvent } from "../../../functions/objectDispatchEvent";
import { objectUpdateMatrix } from "../../../functions/objectUpdateMatrix";
import { objectUpdateWorldMatrix } from "../../../functions/objectUpdateWorldMatrix";
import { onPerformanceChange } from "../../../functions/onPerformanceChange";
import { onViewerControlsEvent } from "../../../functions/onViewerControlsEvent";
import { orArrays } from "../../../functions/orArrays";
import { orBooleans } from "../../../functions/orBooleans";
import { particlesSystemReset } from "../../../functions/particlesSystemReset";
import { particlesSystemStepSimulation } from "../../../functions/particlesSystemStepSimulation";
import { pauseAudioSource } from "../../../functions/pauseAudioSource";
import { physicsDebugUpdate } from "../../../functions/physicsDebugUpdate";
import { physicsRBDAddForce } from "../../../functions/physicsRBDAddForce";
import { physicsRBDAddForceAtPoint } from "../../../functions/physicsRBDAddForceAtPoint";
import { physicsRBDAddTorque } from "../../../functions/physicsRBDAddTorque";
import { physicsRBDApplyImpulse } from "../../../functions/physicsRBDApplyImpulse";
import { physicsRBDApplyImpulseAtPoint } from "../../../functions/physicsRBDApplyImpulseAtPoint";
import { physicsRBDApplyTorqueImpulse } from "../../../functions/physicsRBDApplyTorqueImpulse";
import { physicsRBDDelete } from "../../../functions/physicsRBDDelete";
import { physicsRBDResetAll } from "../../../functions/physicsRBDResetAll";
import { physicsRBDResetForces } from "../../../functions/physicsRBDResetForces";
import { physicsRBDResetTorques } from "../../../functions/physicsRBDResetTorques";
import { physicsWorldReset } from "../../../functions/physicsWorldReset";
import { physicsWorldStepSimulation } from "../../../functions/physicsWorldStepSimulation";
import { planeSet } from "../../../functions/planeSet";
import { playAnimation } from "../../../functions/playAnimation";
import { playAudioSource } from "../../../functions/playAudioSource";
import { playerMode } from "../../../functions/playerMode";
import { playerPhysicsUpdate } from "../../../functions/playerPhysicsUpdate";
import { playerSimpleUpdate } from "../../../functions/playerSimpleUpdate";
import { playInstrumentNote } from "../../../functions/playInstrumentNote";
import { polarTransform } from "../../../functions/polarTransform";
import { pressButtonParam } from "../../../functions/pressButtonParam";
import { previousValueColor } from "../../../functions/previousValueColor";
import { previousValuePrimitive } from "../../../functions/previousValuePrimitive";
import { previousValueVector2 } from "../../../functions/previousValueVector2";
import { previousValueVector3 } from "../../../functions/previousValueVector3";
import { previousValueVector4 } from "../../../functions/previousValueVector4";
import { primitiveNeighbourIndex } from "../../../functions/primitiveNeighbourIndex";
import { primitiveNeighboursCount } from "../../../functions/primitiveNeighboursCount";
import { quaternionAngleTo } from "../../../functions/quaternionAngleTo";
import { quaternionSetFromAxisAngle } from "../../../functions/quaternionSetFromAxisAngle";
import { quaternionSetFromEuler } from "../../../functions/quaternionSetFromEuler";
import { quaternionSlerp } from "../../../functions/quaternionSlerp";
import { radToDeg } from "../../../functions/radToDeg";
import { rand } from "../../../functions/rand";
import { random } from "../../../functions/random";
import { rayDistanceToPlane } from "../../../functions/rayDistanceToPlane";
import { rayFromCamera } from "../../../functions/rayFromCamera";
import { rayIntersectBox3 } from "../../../functions/rayIntersectBox3";
import { rayIntersectObject3D } from "../../../functions/rayIntersectObject3D";
import { rayIntersectPlane } from "../../../functions/rayIntersectPlane";
import { rayIntersectsBox3 } from "../../../functions/rayIntersectsBox3";
import { rayIntersectsObject3D } from "../../../functions/rayIntersectsObject3D";
import { rayIntersectSphere } from "../../../functions/rayIntersectSphere";
import { rayIntersectsPlane } from "../../../functions/rayIntersectsPlane";
import { rayIntersectsSphere } from "../../../functions/rayIntersectsSphere";
import { raySet } from "../../../functions/raySet";
import { renderPixel } from "../../../functions/renderPixel";
import { rotateWithAxisAngle } from "../../../functions/rotateWithAxisAngle";
import { rotateWithQuaternion } from "../../../functions/rotateWithQuaternion";
import { SDF2DBox } from "../../../functions/SDF2DBox";
import { SDF2DCircle } from "../../../functions/SDF2DCircle";
import { SDF2DCross } from "../../../functions/SDF2DCross";
import { SDF2DHeart } from "../../../functions/SDF2DHeart";
import { SDF2DRoundedX } from "../../../functions/SDF2DRoundedX";
import { SDFBox } from "../../../functions/SDFBox";
import { SDFElongateFast } from "../../../functions/SDFElongateFast";
import { SDFElongateSlow } from "../../../functions/SDFElongateSlow";
import { SDFIntersect } from "../../../functions/SDFIntersect";
import { SDFOnion } from "../../../functions/SDFOnion";
import { SDFPlane } from "../../../functions/SDFPlane";
import { SDFRevolutionX } from "../../../functions/SDFRevolutionX";
import { SDFRevolutionY } from "../../../functions/SDFRevolutionY";
import { SDFRevolutionZ } from "../../../functions/SDFRevolutionZ";
import { SDFSmoothIntersect } from "../../../functions/SDFSmoothIntersect";
import { SDFSmoothSubtract } from "../../../functions/SDFSmoothSubtract";
import { SDFSmoothUnion } from "../../../functions/SDFSmoothUnion";
import { SDFSphere } from "../../../functions/SDFSphere";
import { SDFSubtract } from "../../../functions/SDFSubtract";
import { SDFTorus } from "../../../functions/SDFTorus";
import { SDFTransform } from "../../../functions/SDFTransform";
import { SDFTube } from "../../../functions/SDFTube";
import { SDFUnion } from "../../../functions/SDFUnion";
import { setCameraViewOffset } from "../../../functions/setCameraViewOffset";
import { setCSSObjectClass } from "../../../functions/setCSSObjectClass";
import { setGeometryInstanceAttributeColor } from "../../../functions/setGeometryInstanceAttributeColor";
import { setGeometryInstanceAttributeFloat } from "../../../functions/setGeometryInstanceAttributeFloat";
import { setGeometryInstanceAttributeQuaternion } from "../../../functions/setGeometryInstanceAttributeQuaternion";
import { setGeometryInstanceAttributeVector2 } from "../../../functions/setGeometryInstanceAttributeVector2";
import { setGeometryInstanceAttributeVector3 } from "../../../functions/setGeometryInstanceAttributeVector3";
import { setGeometryInstanceAttributeVector4 } from "../../../functions/setGeometryInstanceAttributeVector4";
import { setGeometryInstancePositions } from "../../../functions/setGeometryInstancePositions";
import { setGeometryInstanceQuaternions } from "../../../functions/setGeometryInstanceQuaternions";
import { setGeometryInstanceScales } from "../../../functions/setGeometryInstanceScales";
import { setGeometryInstanceTransforms } from "../../../functions/setGeometryInstanceTransforms";
import { setGeometryPositions } from "../../../functions/setGeometryPositions";
import { setMaterialAlphaMap } from "../../../functions/setMaterialAlphaMap";
import { setMaterialAOMap } from "../../../functions/setMaterialAOMap";
import { setMaterialColor } from "../../../functions/setMaterialColor";
import { setMaterialDisplacementMap } from "../../../functions/setMaterialDisplacementMap";
import { setMaterialEmissiveColor } from "../../../functions/setMaterialEmissiveColor";
import { setMaterialEmissiveMap } from "../../../functions/setMaterialEmissiveMap";
import { setMaterialEnvMap } from "../../../functions/setMaterialEnvMap";
import { setMaterialMap } from "../../../functions/setMaterialMap";
import { setMaterialMetalnessMap } from "../../../functions/setMaterialMetalnessMap";
import { setMaterialOpacity } from "../../../functions/setMaterialOpacity";
import { setMaterialRoughnessMap } from "../../../functions/setMaterialRoughnessMap";
import { setMaterialUniformNumber } from "../../../functions/setMaterialUniformNumber";
import { setMaterialUniformTexture } from "../../../functions/setMaterialUniformTexture";
import { setMaterialUniformVectorColor } from "../../../functions/setMaterialUniformVectorColor";
import { setObjectAttribute } from "../../../functions/setObjectAttribute";
import { setObjectCastShadow } from "../../../functions/setObjectCastShadow";
import { setObjectFrustumCulled } from "../../../functions/setObjectFrustumCulled";
import { setObjectLookAt } from "../../../functions/setObjectLookAt";
import { setObjectMaterial } from "../../../functions/setObjectMaterial";
import { setObjectMaterialColor } from "../../../functions/setObjectMaterialColor";
import { setObjectMatrix } from "../../../functions/setObjectMatrix";
import { setObjectMatrixAutoUpdate } from "../../../functions/setObjectMatrixAutoUpdate";
import { setObjectPolarTransform } from "../../../functions/setObjectPolarTransform";
import { setObjectPosition } from "../../../functions/setObjectPosition";
import { setObjectQuaternion } from "../../../functions/setObjectQuaternion";
import { setObjectReceiveShadow } from "../../../functions/setObjectReceiveShadow";
import { setObjectRotation } from "../../../functions/setObjectRotation";
import { setObjectScale } from "../../../functions/setObjectScale";
import { setObjectVisible } from "../../../functions/setObjectVisible";
import { setParamBoolean } from "../../../functions/setParamBoolean";
import { setParamBooleanToggle } from "../../../functions/setParamBooleanToggle";
import { setParamColor } from "../../../functions/setParamColor";
import { setParamFloat } from "../../../functions/setParamFloat";
import { setParamInteger } from "../../../functions/setParamInteger";
import { setParamString } from "../../../functions/setParamString";
import { setParamVector2 } from "../../../functions/setParamVector2";
import { setParamVector3 } from "../../../functions/setParamVector3";
import { setParamVector4 } from "../../../functions/setParamVector4";
import { setPerspectiveCameraFov } from "../../../functions/setPerspectiveCameraFov";
import { setPerspectiveCameraNearFar } from "../../../functions/setPerspectiveCameraNearFar";
import { setPhysicsRBDAngularVelocity } from "../../../functions/setPhysicsRBDAngularVelocity";
import { setPhysicsRBDCapsuleProperty } from "../../../functions/setPhysicsRBDCapsuleProperty";
import { setPhysicsRBDConeProperty } from "../../../functions/setPhysicsRBDConeProperty";
import { setPhysicsRBDCuboidProperty } from "../../../functions/setPhysicsRBDCuboidProperty";
import { setPhysicsRBDCylinderProperty } from "../../../functions/setPhysicsRBDCylinderProperty";
import { setPhysicsRBDLinearVelocity } from "../../../functions/setPhysicsRBDLinearVelocity";
import { setPhysicsRBDPosition } from "../../../functions/setPhysicsRBDPosition";
import { setPhysicsRBDRotation } from "../../../functions/setPhysicsRBDRotation";
import { setPhysicsRBDSphereProperty } from "../../../functions/setPhysicsRBDSphereProperty";
import { setPhysicsWorldGravity } from "../../../functions/setPhysicsWorldGravity";
import { setPlayerInput } from "../../../functions/setPlayerInput";
import { setPointAttributeColor } from "../../../functions/setPointAttributeColor";
import { setPointAttributeNumber } from "../../../functions/setPointAttributeNumber";
import { setPointAttributeVector2 } from "../../../functions/setPointAttributeVector2";
import { setPointAttributeVector3 } from "../../../functions/setPointAttributeVector3";
import { setPointAttributeVector4 } from "../../../functions/setPointAttributeVector4";
import { setPointIndex } from "../../../functions/setPointIndex";
import { setPointInstanceLookAt } from "../../../functions/setPointInstanceLookAt";
import { setPointInstancePosition } from "../../../functions/setPointInstancePosition";
import { setPointInstanceQuaternion } from "../../../functions/setPointInstanceQuaternion";
import { setPointInstanceScale } from "../../../functions/setPointInstanceScale";
import { setPointPosition } from "../../../functions/setPointPosition";
import { setSpotLightIntensity } from "../../../functions/setSpotLightIntensity";
import { setViewer } from "../../../functions/setViewer";
import { setViewerControls } from "../../../functions/setViewerControls";
import { setWFCSoftConstraint } from "../../../functions/setWFCSoftConstraint";
import { sizzleVec3XY } from "../../../functions/sizzleVec3XY";
import { sizzleVec3XZ } from "../../../functions/sizzleVec3XZ";
import { sizzleVec3YZ } from "../../../functions/sizzleVec3YZ";
import { sizzleVec4WArray } from "../../../functions/sizzleVec4WArray";
import { sizzleVec4XYZ } from "../../../functions/sizzleVec4XYZ";
import { sizzleVec4XYZArray } from "../../../functions/sizzleVec4XYZArray";
import { sleep } from "../../../functions/sleep";
import { smootherstep } from "../../../functions/smootherstep";
import { smoothstep } from "../../../functions/smoothstep";
import { softBodyConstraintCreate } from "../../../functions/softBodyConstraintCreate";
import { softBodyConstraintDelete } from "../../../functions/softBodyConstraintDelete";
import { softBodyConstraintSetPosition } from "../../../functions/softBodyConstraintSetPosition";
import { softBodyMultiplyVelocity } from "../../../functions/softBodyMultiplyVelocity";
import { softBodySetPosition } from "../../../functions/softBodySetPosition";
import { softBodySolverStepSimulation } from "../../../functions/softBodySolverStepSimulation";
import { sphereSet } from "../../../functions/sphereSet";
import { subtractNumber } from "../../../functions/subtractNumber";
import { subtractVector } from "../../../functions/subtractVector";
import { subtractVectorNumber } from "../../../functions/subtractVectorNumber";
import { trackFace } from "../../../functions/trackFace";
import { trackFaceGetLandmarks } from "../../../functions/trackFaceGetLandmarks";
import { trackHand } from "../../../functions/trackHand";
import { trackHandGetNormalizedLandmarks } from "../../../functions/trackHandGetNormalizedLandmarks";
import { trackHandGetWorldLandmarks } from "../../../functions/trackHandGetWorldLandmarks";
import { triggerFilter } from "../../../functions/triggerFilter";
import { triggerSwitch } from "../../../functions/triggerSwitch";
import { triggerTwoWaySwitch } from "../../../functions/triggerTwoWaySwitch";
import { vec2ToVec3 } from "../../../functions/vec2ToVec3";
import { vec3ToColor } from "../../../functions/vec3ToColor";
import { vec3ToVec4 } from "../../../functions/vec3ToVec4";
import { vector3AngleTo } from "../../../functions/vector3AngleTo";
import { vector3Project } from "../../../functions/vector3Project";
import { vector3ProjectOnPlane } from "../../../functions/vector3ProjectOnPlane";
import { vector3Unproject } from "../../../functions/vector3Unproject";
import { WFCBuild } from "../../../functions/WFCBuild";

export interface NamedFunctionMap {
	addAudioStopEventListener: addAudioStopEventListener;
	addNumber: addNumber;
	addObjectToClickCheck: addObjectToClickCheck;
	addObjectToContextmenuCheck: addObjectToContextmenuCheck;
	addObjectToHoveredCheck: addObjectToHoveredCheck;
	addObjectToLongPressCheck: addObjectToLongPressCheck;
	addObjectToPointerdownCheck: addObjectToPointerdownCheck;
	addObjectToPointerupCheck: addObjectToPointerupCheck;
	addObjectToSwipeCheck: addObjectToSwipeCheck;
	addVector: addVector<Vector2 | Vector3 | Vector4>;
	addVectorNumber: addVectorNumber<Vector2 | Vector3 | Vector4>;
	addVideoEventListener: addVideoEventListener;
	andArrays: andArrays;
	andBooleans: andBooleans;
	animationActionCrossFade: animationActionCrossFade;
	animationActionFadeIn: animationActionFadeIn;
	animationActionFadeOut: animationActionFadeOut;
	animationActionPlay: animationActionPlay;
	animationActionStop: animationActionStop;
	animationMixerUpdate: animationMixerUpdate;
	arrayElementPrimitive: arrayElementPrimitive<PrimitiveArrayElement>;
	arrayElementVector: arrayElementVector<Vector2 | Vector3 | Vector4>;
	arrayLength: arrayLength;
	arrayPopPrimitive: arrayPopPrimitive<PrimitiveArrayElement>;
	arrayPopVector: arrayPopVector<Vector2 | Vector3 | Vector4>;
	arrayShiftPrimitive: arrayShiftPrimitive<PrimitiveArrayElement>;
	arrayShiftVector: arrayShiftVector<Vector2 | Vector3 | Vector4>;
	boolToInt: boolToInt;
	box3ContainsPoint: box3ContainsPoint;
	box3IntersectsBox3: box3IntersectsBox3;
	box3Set: box3Set;
	box3SetFromObject: box3SetFromObject;
	catmullRomCurve3GetPoint: catmullRomCurve3GetPoint;
	channelFloat: channelFloat;
	channelValueFloat: channelValueFloat;
	channelValueVector2: channelValueVector2;
	channelValueVector3: channelValueVector3;
	channelValueVector4: channelValueVector4;
	channelVector2: channelVector2;
	channelVector3: channelVector3;
	channelVector4: channelVector4;
	clamp: clamp;
	clothConstraintSetPosition: clothConstraintSetPosition;
	clothCreateConstraint: clothCreateConstraint;
	clothDeleteConstraint: clothDeleteConstraint;
	clothSolverReset: clothSolverReset;
	clothSolverStepSimulation: clothSolverStepSimulation;
	clothSolverUpdateMaterial: clothSolverUpdateMaterial;
	colorSetRGB: colorSetRGB;
	colorToVec3: colorToVec3;
	complement: complement;
	computeVelocity: computeVelocity;
	cookNode: cookNode;
	createObject: createObject;
	createObjects: createObjects;
	createPhysicsRBD: createPhysicsRBD;
	createPhysicsRBDKinematicConstraint: createPhysicsRBDKinematicConstraint;
	createPhysicsRBDs: createPhysicsRBDs;
	createScrollListener: createScrollListener;
	crossVector2: crossVector2;
	crossVector3: crossVector3;
	cubeLatticeDeform: cubeLatticeDeform;
	cursorToUv: cursorToUv;
	debug: debug<any>;
	degToRad: degToRad;
	deletePhysicsRBDConstraints: deletePhysicsRBDConstraints;
	deletePhysicsRBDKinematicConstraint: deletePhysicsRBDKinematicConstraint;
	deviceOrientation: deviceOrientation;
	distanceVector2: distanceVector2;
	distanceVector3: distanceVector3;
	divideNumber: divideNumber;
	divideVectorNumber: divideVectorNumber<Vector2 | Vector3 | Vector4>;
	dotVector2: dotVector2;
	dotVector3: dotVector3;
	easeElasticI: easeElasticI;
	easeElasticIO: easeElasticIO;
	easeElasticO: easeElasticO;
	easeI2: easeI2;
	easeI3: easeI3;
	easeI4: easeI4;
	easeIO2: easeIO2;
	easeIO3: easeIO3;
	easeIO4: easeIO4;
	easeO2: easeO2;
	easeO3: easeO3;
	easeO4: easeO4;
	easeSinI: easeSinI;
	easeSinIO: easeSinIO;
	easeSinO: easeSinO;
	elementsToArrayPrimitive: elementsToArrayPrimitive<PrimitiveArrayElement>;
	elementsToArrayVector: elementsToArrayVector<VectorArrayElement>;
	eulerSetFromQuaternion: eulerSetFromQuaternion;
	eulerSetFromVector3: eulerSetFromVector3;
	fit: fit;
	fitClamp: fitClamp;
	floatToColor: floatToColor;
	floatToInt: floatToInt;
	floatToVec2: floatToVec2;
	floatToVec3: floatToVec3;
	floatToVec4: floatToVec4;
	geolocationCurrentPositionRef: geolocationCurrentPositionRef;
	geolocationGetCurrentPosition: geolocationGetCurrentPosition;
	geolocationLatitude: geolocationLatitude;
	geolocationLongitude: geolocationLongitude;
	getActorNodeParamValue: getActorNodeParamValue;
	getAnimationAction: getAnimationAction;
	getAnimationMixer: getAnimationMixer;
	getBox3Center: getBox3Center;
	getBox3Max: getBox3Max;
	getBox3Min: getBox3Min;
	getChildrenAttributes: getChildrenAttributes;
	getChildrenAttributesPrevious: getChildrenAttributesPrevious;
	getChildrenAttributesRef: getChildrenAttributesRef;
	getChildrenPhysicsRBDPropertiesAngularDamping: getChildrenPhysicsRBDPropertiesAngularDamping;
	getChildrenPhysicsRBDPropertiesAngularVelocity: getChildrenPhysicsRBDPropertiesAngularVelocity;
	getChildrenPhysicsRBDPropertiesIsMoving: getChildrenPhysicsRBDPropertiesIsMoving;
	getChildrenPhysicsRBDPropertiesIsSleeping: getChildrenPhysicsRBDPropertiesIsSleeping;
	getChildrenPhysicsRBDPropertiesLinearDamping: getChildrenPhysicsRBDPropertiesLinearDamping;
	getChildrenPhysicsRBDPropertiesLinearVelocity: getChildrenPhysicsRBDPropertiesLinearVelocity;
	getChildrenPropertiesCastShadow: getChildrenPropertiesCastShadow;
	getChildrenPropertiesFrustumCulled: getChildrenPropertiesFrustumCulled;
	getChildrenPropertiesMatrixAutoUpdate: getChildrenPropertiesMatrixAutoUpdate;
	getChildrenPropertiesPosition: getChildrenPropertiesPosition;
	getChildrenPropertiesQuaternion: getChildrenPropertiesQuaternion;
	getChildrenPropertiesReceiveShadow: getChildrenPropertiesReceiveShadow;
	getChildrenPropertiesScale: getChildrenPropertiesScale;
	getChildrenPropertiesUp: getChildrenPropertiesUp;
	getChildrenPropertiesVisible: getChildrenPropertiesVisible;
	getDefaultCamera: getDefaultCamera;
	getGeometryBoundingBox: getGeometryBoundingBox;
	getGeometryNodeObjects: getGeometryNodeObjects;
	getGeometryPositions: getGeometryPositions;
	getIntersectionAttributeColorInterpolated: getIntersectionAttributeColorInterpolated;
	getIntersectionAttributeColorNearest: getIntersectionAttributeColorNearest;
	getIntersectionAttributeNumberInterpolated: getIntersectionAttributeNumberInterpolated;
	getIntersectionAttributeNumberNearest: getIntersectionAttributeNumberNearest;
	getIntersectionAttributeStringNearest: getIntersectionAttributeStringNearest;
	getIntersectionAttributeVector2Interpolated: getIntersectionAttributeVector2Interpolated;
	getIntersectionAttributeVector2Nearest: getIntersectionAttributeVector2Nearest;
	getIntersectionAttributeVector3Interpolated: getIntersectionAttributeVector3Interpolated;
	getIntersectionAttributeVector3Nearest: getIntersectionAttributeVector3Nearest;
	getIntersectionAttributeVector4Interpolated: getIntersectionAttributeVector4Interpolated;
	getIntersectionAttributeVector4Nearest: getIntersectionAttributeVector4Nearest;
	getIntersectionPropertyDistance: getIntersectionPropertyDistance;
	getIntersectionPropertyNormal: getIntersectionPropertyNormal;
	getIntersectionPropertyObject: getIntersectionPropertyObject;
	getIntersectionPropertyPoint: getIntersectionPropertyPoint;
	getIntersectionPropertyUv: getIntersectionPropertyUv;
	getMaterial: getMaterial;
	getNode: getNode;
	getObject: getObject;
	getObjectAttribute: getObjectAttribute<ParamConvertibleJsType>;
	getObjectAttributeAutoDefault: getObjectAttributeAutoDefault<ParamConvertibleJsType>;
	getObjectAttributePrevious: getObjectAttributePrevious;
	getObjectAttributeRef: getObjectAttributeRef;
	getObjectChild: getObjectChild;
	getObjectLastDispatchedEventName: getObjectLastDispatchedEventName;
	getObjectProperty: getObjectProperty;
	getObjectUserData: getObjectUserData;
	getObjectWorldPosition: getObjectWorldPosition;
	getParam: getParam;
	getParent: getParent;
	getPhysicsRBD: getPhysicsRBD;
	getPhysicsRBDAngularDamping: getPhysicsRBDAngularDamping;
	getPhysicsRBDAngularVelocity: getPhysicsRBDAngularVelocity;
	getPhysicsRBDCapsuleHeight: getPhysicsRBDCapsuleHeight;
	getPhysicsRBDCapsuleRadius: getPhysicsRBDCapsuleRadius;
	getPhysicsRBDConeHeight: getPhysicsRBDConeHeight;
	getPhysicsRBDConeRadius: getPhysicsRBDConeRadius;
	getPhysicsRBDCuboidSizes: getPhysicsRBDCuboidSizes;
	getPhysicsRBDCylinderHeight: getPhysicsRBDCylinderHeight;
	getPhysicsRBDCylinderRadius: getPhysicsRBDCylinderRadius;
	getPhysicsRBDIsMoving: getPhysicsRBDIsMoving;
	getPhysicsRBDIsSleeping: getPhysicsRBDIsSleeping;
	getPhysicsRBDLinearDamping: getPhysicsRBDLinearDamping;
	getPhysicsRBDLinearVelocity: getPhysicsRBDLinearVelocity;
	getPhysicsRBDSphereRadius: getPhysicsRBDSphereRadius;
	getPlaneConstant: getPlaneConstant;
	getPlaneNormal: getPlaneNormal;
	getPlayerInputDataBackward: getPlayerInputDataBackward;
	getPlayerInputDataForward: getPlayerInputDataForward;
	getPlayerInputDataJump: getPlayerInputDataJump;
	getPlayerInputDataLeft: getPlayerInputDataLeft;
	getPlayerInputDataRight: getPlayerInputDataRight;
	getPlayerInputDataRun: getPlayerInputDataRun;
	getPlayerSimplePropertyOnGround: getPlayerSimplePropertyOnGround;
	getPlayerSimplePropertyVelocity: getPlayerSimplePropertyVelocity;
	getPointAttributeNumber: getPointAttributeNumber;
	getPointAttributeVector2: getPointAttributeVector2;
	getPointAttributeVector3: getPointAttributeVector3;
	getPointAttributeVector4: getPointAttributeVector4;
	getPointIndex: getPointIndex;
	getPointInstancePosition: getPointInstancePosition;
	getPointInstanceQuaternion: getPointInstanceQuaternion;
	getPointInstanceScale: getPointInstanceScale;
	getPointPosition: getPointPosition;
	getRayDirection: getRayDirection;
	getRayOrigin: getRayOrigin;
	getSibbling: getSibbling;
	getSphereCenter: getSphereCenter;
	getSphereRadius: getSphereRadius;
	getTexture: getTexture;
	getTrackedHandIndexDirection: getTrackedHandIndexDirection;
	getTrackedHandMiddleDirection: getTrackedHandMiddleDirection;
	getTrackedHandPinkyDirection: getTrackedHandPinkyDirection;
	getTrackedHandRingDirection: getTrackedHandRingDirection;
	getTrackedHandThumbDirection: getTrackedHandThumbDirection;
	getVideoPropertyCurrentTime: getVideoPropertyCurrentTime;
	getVideoPropertyDuration: getVideoPropertyDuration;
	getVideoPropertyMuted: getVideoPropertyMuted;
	getVideoPropertyPlaying: getVideoPropertyPlaying;
	getWebXRARHitDetected: getWebXRARHitDetected;
	getWebXRARHitMatrix: getWebXRARHitMatrix;
	getWebXRARHitPosition: getWebXRARHitPosition;
	getWebXRARHitQuaternion: getWebXRARHitQuaternion;
	getWebXRControllerAngularVelocity: getWebXRControllerAngularVelocity;
	getWebXRControllerHasAngularVelocity: getWebXRControllerHasAngularVelocity;
	getWebXRControllerHasLinearVelocity: getWebXRControllerHasLinearVelocity;
	getWebXRControllerLinearVelocity: getWebXRControllerLinearVelocity;
	getWebXRControllerObject: getWebXRControllerObject;
	getWebXRControllerRay: getWebXRControllerRay;
	getWebXRTrackedMarkerMatrix: getWebXRTrackedMarkerMatrix;
	globalsCursor: globalsCursor;
	globalsRaycaster: globalsRaycaster;
	globalsRayFromCursor: globalsRayFromCursor;
	globalsTime: globalsTime;
	globalsTimeDelta: globalsTimeDelta;
	hsvToRgb: hsvToRgb;
	importPrimitiveAttributeNumber: importPrimitiveAttributeNumber;
	intToBool: intToBool;
	intToFloat: intToFloat;
	isTouchDevice: isTouchDevice;
	keyboardEventMatchesConfig: keyboardEventMatchesConfig;
	lengthVector: lengthVector<Vector2 | Vector3 | Vector4>;
	lengthVectorArray: lengthVectorArray<Vector2 | Vector3 | Vector4>;
	lerpColor: lerpColor;
	lerpNumber: lerpNumber;
	lerpQuaternion: lerpQuaternion;
	lerpVector2: lerpVector2;
	lerpVector3: lerpVector3;
	lerpVector4: lerpVector4;
	manhattanDistanceVector2: manhattanDistanceVector2;
	manhattanDistanceVector3: manhattanDistanceVector3;
	mathColor_1: mathColor_1;
	mathColor_2: mathColor_2;
	mathColor_3: mathColor_3;
	mathColor_3vvf: mathColor_3vvf;
	mathColor_4: mathColor_4;
	mathColor_5: mathColor_5;
	mathFloat_1: mathFloat_1;
	mathFloat_2: mathFloat_2;
	mathFloat_3: mathFloat_3;
	mathFloat_4: mathFloat_4;
	mathFloat_5: mathFloat_5;
	mathPrimArray_1: mathPrimArray_1;
	mathPrimArray_2: mathPrimArray_2;
	mathPrimArray_3: mathPrimArray_3;
	mathPrimArray_4: mathPrimArray_4;
	mathPrimArray_5: mathPrimArray_5;
	mathVector2_1: mathVector2_1;
	mathVector2_2: mathVector2_2;
	mathVector2_3: mathVector2_3;
	mathVector2_3vvf: mathVector2_3vvf;
	mathVector2_4: mathVector2_4;
	mathVector2_5: mathVector2_5;
	mathVector3_1: mathVector3_1;
	mathVector3_2: mathVector3_2;
	mathVector3_3: mathVector3_3;
	mathVector3_3vvf: mathVector3_3vvf;
	mathVector3_4: mathVector3_4;
	mathVector3_5: mathVector3_5;
	mathVector4_1: mathVector4_1;
	mathVector4_2: mathVector4_2;
	mathVector4_3: mathVector4_3;
	mathVector4_3vvf: mathVector4_3vvf;
	mathVector4_4: mathVector4_4;
	mathVector4_5: mathVector4_5;
	mathVectorArray_1: mathVectorArray_1<MathArrayVectorElement>;
	mathVectorArray_2: mathVectorArray_2<MathArrayVectorElement>;
	mathVectorArray_3: mathVectorArray_3<MathArrayVectorElement>;
	mathVectorArray_4: mathVectorArray_4<MathArrayVectorElement>;
	mathVectorArray_5: mathVectorArray_5<MathArrayVectorElement>;
	matrix4LookAt: matrix4LookAt;
	matrix4MakeTranslation: matrix4MakeTranslation;
	matrix4Multiply: matrix4Multiply;
	maxLengthVector2: maxLengthVector2;
	maxLengthVector3: maxLengthVector3;
	maxLengthVector4: maxLengthVector4;
	mix: mix;
	mod: mod;
	multAdd: multAdd;
	multNumber: multNumber;
	multScalarArrayVectorArray: multScalarArrayVectorArray<Color | Vector2 | Vector3 | Vector4>;
	multScalarColor: multScalarColor;
	multScalarVector2: multScalarVector2;
	multScalarVector3: multScalarVector3;
	multScalarVector4: multScalarVector4;
	multScalarVectorArray: multScalarVectorArray<Color | Vector2 | Vector3 | Vector4>;
	multVector: multVector<Vector2 | Vector3 | Vector4>;
	multVectorNumber: multVectorNumber<Vector2 | Vector3 | Vector4>;
	nearestPosition: nearestPosition;
	negate: negate<boolean | number>;
	noiseImprovedVector3: noiseImprovedVector3;
	noiseSimplexVector2: noiseSimplexVector2;
	noiseSimplexVector3: noiseSimplexVector3;
	noiseSimplexVector4: noiseSimplexVector4;
	normalizeVector2: normalizeVector2;
	normalizeVector3: normalizeVector3;
	normalizeVector4: normalizeVector4;
	object3DLocalToWorld: object3DLocalToWorld;
	object3DWorldToLocal: object3DWorldToLocal;
	objectAddEventListeners: objectAddEventListeners;
	objectAddOnBeforeDeleteEventListener: objectAddOnBeforeDeleteEventListener;
	objectDelete: objectDelete;
	objectDispatchEvent: objectDispatchEvent;
	objectUpdateMatrix: objectUpdateMatrix;
	objectUpdateWorldMatrix: objectUpdateWorldMatrix;
	onPerformanceChange: onPerformanceChange;
	onViewerControlsEvent: onViewerControlsEvent;
	orArrays: orArrays;
	orBooleans: orBooleans;
	particlesSystemReset: particlesSystemReset;
	particlesSystemStepSimulation: particlesSystemStepSimulation;
	pauseAudioSource: pauseAudioSource;
	physicsDebugUpdate: physicsDebugUpdate;
	physicsRBDAddForce: physicsRBDAddForce;
	physicsRBDAddForceAtPoint: physicsRBDAddForceAtPoint;
	physicsRBDAddTorque: physicsRBDAddTorque;
	physicsRBDApplyImpulse: physicsRBDApplyImpulse;
	physicsRBDApplyImpulseAtPoint: physicsRBDApplyImpulseAtPoint;
	physicsRBDApplyTorqueImpulse: physicsRBDApplyTorqueImpulse;
	physicsRBDDelete: physicsRBDDelete;
	physicsRBDResetAll: physicsRBDResetAll;
	physicsRBDResetForces: physicsRBDResetForces;
	physicsRBDResetTorques: physicsRBDResetTorques;
	physicsWorldReset: physicsWorldReset;
	physicsWorldStepSimulation: physicsWorldStepSimulation;
	planeSet: planeSet;
	playAnimation: playAnimation;
	playAudioSource: playAudioSource;
	playerMode: playerMode;
	playerPhysicsUpdate: playerPhysicsUpdate;
	playerSimpleUpdate: playerSimpleUpdate;
	playInstrumentNote: playInstrumentNote;
	polarTransform: polarTransform;
	pressButtonParam: pressButtonParam;
	previousValueColor: previousValueColor;
	previousValuePrimitive: previousValuePrimitive<boolean | number | string>;
	previousValueVector2: previousValueVector2;
	previousValueVector3: previousValueVector3;
	previousValueVector4: previousValueVector4;
	primitiveNeighbourIndex: primitiveNeighbourIndex;
	primitiveNeighboursCount: primitiveNeighboursCount;
	quaternionAngleTo: quaternionAngleTo;
	quaternionSetFromAxisAngle: quaternionSetFromAxisAngle;
	quaternionSetFromEuler: quaternionSetFromEuler;
	quaternionSlerp: quaternionSlerp;
	radToDeg: radToDeg;
	rand: rand;
	random: random;
	rayDistanceToPlane: rayDistanceToPlane;
	rayFromCamera: rayFromCamera;
	rayIntersectBox3: rayIntersectBox3;
	rayIntersectObject3D: rayIntersectObject3D;
	rayIntersectPlane: rayIntersectPlane;
	rayIntersectsBox3: rayIntersectsBox3;
	rayIntersectsObject3D: rayIntersectsObject3D;
	rayIntersectSphere: rayIntersectSphere;
	rayIntersectsPlane: rayIntersectsPlane;
	rayIntersectsSphere: rayIntersectsSphere;
	raySet: raySet;
	renderPixel: renderPixel;
	rotateWithAxisAngle: rotateWithAxisAngle;
	rotateWithQuaternion: rotateWithQuaternion;
	SDF2DBox: SDF2DBox;
	SDF2DCircle: SDF2DCircle;
	SDF2DCross: SDF2DCross;
	SDF2DHeart: SDF2DHeart;
	SDF2DRoundedX: SDF2DRoundedX;
	SDFBox: SDFBox;
	SDFElongateFast: SDFElongateFast;
	SDFElongateSlow: SDFElongateSlow;
	SDFIntersect: SDFIntersect;
	SDFOnion: SDFOnion;
	SDFPlane: SDFPlane;
	SDFRevolutionX: SDFRevolutionX;
	SDFRevolutionY: SDFRevolutionY;
	SDFRevolutionZ: SDFRevolutionZ;
	SDFSmoothIntersect: SDFSmoothIntersect;
	SDFSmoothSubtract: SDFSmoothSubtract;
	SDFSmoothUnion: SDFSmoothUnion;
	SDFSphere: SDFSphere;
	SDFSubtract: SDFSubtract;
	SDFTorus: SDFTorus;
	SDFTransform: SDFTransform;
	SDFTube: SDFTube;
	SDFUnion: SDFUnion;
	setCameraViewOffset: setCameraViewOffset;
	setCSSObjectClass: setCSSObjectClass;
	setGeometryInstanceAttributeColor: setGeometryInstanceAttributeColor;
	setGeometryInstanceAttributeFloat: setGeometryInstanceAttributeFloat;
	setGeometryInstanceAttributeQuaternion: setGeometryInstanceAttributeQuaternion;
	setGeometryInstanceAttributeVector2: setGeometryInstanceAttributeVector2;
	setGeometryInstanceAttributeVector3: setGeometryInstanceAttributeVector3;
	setGeometryInstanceAttributeVector4: setGeometryInstanceAttributeVector4;
	setGeometryInstancePositions: setGeometryInstancePositions;
	setGeometryInstanceQuaternions: setGeometryInstanceQuaternions;
	setGeometryInstanceScales: setGeometryInstanceScales;
	setGeometryInstanceTransforms: setGeometryInstanceTransforms;
	setGeometryPositions: setGeometryPositions;
	setMaterialAlphaMap: setMaterialAlphaMap;
	setMaterialAOMap: setMaterialAOMap;
	setMaterialColor: setMaterialColor;
	setMaterialDisplacementMap: setMaterialDisplacementMap;
	setMaterialEmissiveColor: setMaterialEmissiveColor;
	setMaterialEmissiveMap: setMaterialEmissiveMap;
	setMaterialEnvMap: setMaterialEnvMap;
	setMaterialMap: setMaterialMap;
	setMaterialMetalnessMap: setMaterialMetalnessMap;
	setMaterialOpacity: setMaterialOpacity;
	setMaterialRoughnessMap: setMaterialRoughnessMap;
	setMaterialUniformNumber: setMaterialUniformNumber;
	setMaterialUniformTexture: setMaterialUniformTexture;
	setMaterialUniformVectorColor: setMaterialUniformVectorColor;
	setObjectAttribute: setObjectAttribute;
	setObjectCastShadow: setObjectCastShadow;
	setObjectFrustumCulled: setObjectFrustumCulled;
	setObjectLookAt: setObjectLookAt;
	setObjectMaterial: setObjectMaterial;
	setObjectMaterialColor: setObjectMaterialColor;
	setObjectMatrix: setObjectMatrix;
	setObjectMatrixAutoUpdate: setObjectMatrixAutoUpdate;
	setObjectPolarTransform: setObjectPolarTransform;
	setObjectPosition: setObjectPosition;
	setObjectQuaternion: setObjectQuaternion;
	setObjectReceiveShadow: setObjectReceiveShadow;
	setObjectRotation: setObjectRotation;
	setObjectScale: setObjectScale;
	setObjectVisible: setObjectVisible;
	setParamBoolean: setParamBoolean;
	setParamBooleanToggle: setParamBooleanToggle;
	setParamColor: setParamColor;
	setParamFloat: setParamFloat;
	setParamInteger: setParamInteger;
	setParamString: setParamString;
	setParamVector2: setParamVector2;
	setParamVector3: setParamVector3;
	setParamVector4: setParamVector4;
	setPerspectiveCameraFov: setPerspectiveCameraFov;
	setPerspectiveCameraNearFar: setPerspectiveCameraNearFar;
	setPhysicsRBDAngularVelocity: setPhysicsRBDAngularVelocity;
	setPhysicsRBDCapsuleProperty: setPhysicsRBDCapsuleProperty;
	setPhysicsRBDConeProperty: setPhysicsRBDConeProperty;
	setPhysicsRBDCuboidProperty: setPhysicsRBDCuboidProperty;
	setPhysicsRBDCylinderProperty: setPhysicsRBDCylinderProperty;
	setPhysicsRBDLinearVelocity: setPhysicsRBDLinearVelocity;
	setPhysicsRBDPosition: setPhysicsRBDPosition;
	setPhysicsRBDRotation: setPhysicsRBDRotation;
	setPhysicsRBDSphereProperty: setPhysicsRBDSphereProperty;
	setPhysicsWorldGravity: setPhysicsWorldGravity;
	setPlayerInput: setPlayerInput;
	setPointAttributeColor: setPointAttributeColor;
	setPointAttributeNumber: setPointAttributeNumber;
	setPointAttributeVector2: setPointAttributeVector2;
	setPointAttributeVector3: setPointAttributeVector3;
	setPointAttributeVector4: setPointAttributeVector4;
	setPointIndex: setPointIndex;
	setPointInstanceLookAt: setPointInstanceLookAt;
	setPointInstancePosition: setPointInstancePosition;
	setPointInstanceQuaternion: setPointInstanceQuaternion;
	setPointInstanceScale: setPointInstanceScale;
	setPointPosition: setPointPosition;
	setSpotLightIntensity: setSpotLightIntensity;
	setViewer: setViewer;
	setViewerControls: setViewerControls;
	setWFCSoftConstraint: setWFCSoftConstraint;
	sizzleVec3XY: sizzleVec3XY;
	sizzleVec3XZ: sizzleVec3XZ;
	sizzleVec3YZ: sizzleVec3YZ;
	sizzleVec4WArray: sizzleVec4WArray;
	sizzleVec4XYZ: sizzleVec4XYZ;
	sizzleVec4XYZArray: sizzleVec4XYZArray;
	sleep: sleep;
	smootherstep: smootherstep;
	smoothstep: smoothstep;
	softBodyConstraintCreate: softBodyConstraintCreate;
	softBodyConstraintDelete: softBodyConstraintDelete;
	softBodyConstraintSetPosition: softBodyConstraintSetPosition;
	softBodyMultiplyVelocity: softBodyMultiplyVelocity;
	softBodySetPosition: softBodySetPosition;
	softBodySolverStepSimulation: softBodySolverStepSimulation;
	sphereSet: sphereSet;
	subtractNumber: subtractNumber;
	subtractVector: subtractVector<Vector2 | Vector3 | Vector4>;
	subtractVectorNumber: subtractVectorNumber<Vector2 | Vector3 | Vector4>;
	trackFace: trackFace;
	trackFaceGetLandmarks: trackFaceGetLandmarks;
	trackHand: trackHand;
	trackHandGetNormalizedLandmarks: trackHandGetNormalizedLandmarks;
	trackHandGetWorldLandmarks: trackHandGetWorldLandmarks;
	triggerFilter: triggerFilter;
	triggerSwitch: triggerSwitch;
	triggerTwoWaySwitch: triggerTwoWaySwitch;
	vec2ToVec3: vec2ToVec3;
	vec3ToColor: vec3ToColor;
	vec3ToVec4: vec3ToVec4;
	vector3AngleTo: vector3AngleTo;
	vector3Project: vector3Project;
	vector3ProjectOnPlane: vector3ProjectOnPlane;
	vector3Unproject: vector3Unproject;
	WFCBuild: WFCBuild;
}

export class AllNamedFunctionRegister {
	static run(poly: PolyEngine) {
		[
			addAudioStopEventListener,
			addNumber,
			addObjectToClickCheck,
			addObjectToContextmenuCheck,
			addObjectToHoveredCheck,
			addObjectToLongPressCheck,
			addObjectToPointerdownCheck,
			addObjectToPointerupCheck,
			addObjectToSwipeCheck,
			addVector,
			addVectorNumber,
			addVideoEventListener,
			andArrays,
			andBooleans,
			animationActionCrossFade,
			animationActionFadeIn,
			animationActionFadeOut,
			animationActionPlay,
			animationActionStop,
			animationMixerUpdate,
			arrayElementPrimitive,
			arrayElementVector,
			arrayLength,
			arrayPopPrimitive,
			arrayPopVector,
			arrayShiftPrimitive,
			arrayShiftVector,
			boolToInt,
			box3ContainsPoint,
			box3IntersectsBox3,
			box3Set,
			box3SetFromObject,
			catmullRomCurve3GetPoint,
			channelFloat,
			channelValueFloat,
			channelValueVector2,
			channelValueVector3,
			channelValueVector4,
			channelVector2,
			channelVector3,
			channelVector4,
			clamp,
			clothConstraintSetPosition,
			clothCreateConstraint,
			clothDeleteConstraint,
			clothSolverReset,
			clothSolverStepSimulation,
			clothSolverUpdateMaterial,
			colorSetRGB,
			colorToVec3,
			complement,
			computeVelocity,
			cookNode,
			createObject,
			createObjects,
			createPhysicsRBD,
			createPhysicsRBDKinematicConstraint,
			createPhysicsRBDs,
			createScrollListener,
			crossVector2,
			crossVector3,
			cubeLatticeDeform,
			cursorToUv,
			debug,
			degToRad,
			deletePhysicsRBDConstraints,
			deletePhysicsRBDKinematicConstraint,
			deviceOrientation,
			distanceVector2,
			distanceVector3,
			divideNumber,
			divideVectorNumber,
			dotVector2,
			dotVector3,
			easeElasticI,
			easeElasticIO,
			easeElasticO,
			easeI2,
			easeI3,
			easeI4,
			easeIO2,
			easeIO3,
			easeIO4,
			easeO2,
			easeO3,
			easeO4,
			easeSinI,
			easeSinIO,
			easeSinO,
			elementsToArrayPrimitive,
			elementsToArrayVector,
			eulerSetFromQuaternion,
			eulerSetFromVector3,
			fit,
			fitClamp,
			floatToColor,
			floatToInt,
			floatToVec2,
			floatToVec3,
			floatToVec4,
			geolocationCurrentPositionRef,
			geolocationGetCurrentPosition,
			geolocationLatitude,
			geolocationLongitude,
			getActorNodeParamValue,
			getAnimationAction,
			getAnimationMixer,
			getBox3Center,
			getBox3Max,
			getBox3Min,
			getChildrenAttributes,
			getChildrenAttributesPrevious,
			getChildrenAttributesRef,
			getChildrenPhysicsRBDPropertiesAngularDamping,
			getChildrenPhysicsRBDPropertiesAngularVelocity,
			getChildrenPhysicsRBDPropertiesIsMoving,
			getChildrenPhysicsRBDPropertiesIsSleeping,
			getChildrenPhysicsRBDPropertiesLinearDamping,
			getChildrenPhysicsRBDPropertiesLinearVelocity,
			getChildrenPropertiesCastShadow,
			getChildrenPropertiesFrustumCulled,
			getChildrenPropertiesMatrixAutoUpdate,
			getChildrenPropertiesPosition,
			getChildrenPropertiesQuaternion,
			getChildrenPropertiesReceiveShadow,
			getChildrenPropertiesScale,
			getChildrenPropertiesUp,
			getChildrenPropertiesVisible,
			getDefaultCamera,
			getGeometryBoundingBox,
			getGeometryNodeObjects,
			getGeometryPositions,
			getIntersectionAttributeColorInterpolated,
			getIntersectionAttributeColorNearest,
			getIntersectionAttributeNumberInterpolated,
			getIntersectionAttributeNumberNearest,
			getIntersectionAttributeStringNearest,
			getIntersectionAttributeVector2Interpolated,
			getIntersectionAttributeVector2Nearest,
			getIntersectionAttributeVector3Interpolated,
			getIntersectionAttributeVector3Nearest,
			getIntersectionAttributeVector4Interpolated,
			getIntersectionAttributeVector4Nearest,
			getIntersectionPropertyDistance,
			getIntersectionPropertyNormal,
			getIntersectionPropertyObject,
			getIntersectionPropertyPoint,
			getIntersectionPropertyUv,
			getMaterial,
			getNode,
			getObject,
			getObjectAttribute,
			getObjectAttributeAutoDefault,
			getObjectAttributePrevious,
			getObjectAttributeRef,
			getObjectChild,
			getObjectLastDispatchedEventName,
			getObjectProperty,
			getObjectUserData,
			getObjectWorldPosition,
			getParam,
			getParent,
			getPhysicsRBD,
			getPhysicsRBDAngularDamping,
			getPhysicsRBDAngularVelocity,
			getPhysicsRBDCapsuleHeight,
			getPhysicsRBDCapsuleRadius,
			getPhysicsRBDConeHeight,
			getPhysicsRBDConeRadius,
			getPhysicsRBDCuboidSizes,
			getPhysicsRBDCylinderHeight,
			getPhysicsRBDCylinderRadius,
			getPhysicsRBDIsMoving,
			getPhysicsRBDIsSleeping,
			getPhysicsRBDLinearDamping,
			getPhysicsRBDLinearVelocity,
			getPhysicsRBDSphereRadius,
			getPlaneConstant,
			getPlaneNormal,
			getPlayerInputDataBackward,
			getPlayerInputDataForward,
			getPlayerInputDataJump,
			getPlayerInputDataLeft,
			getPlayerInputDataRight,
			getPlayerInputDataRun,
			getPlayerSimplePropertyOnGround,
			getPlayerSimplePropertyVelocity,
			getPointAttributeNumber,
			getPointAttributeVector2,
			getPointAttributeVector3,
			getPointAttributeVector4,
			getPointIndex,
			getPointInstancePosition,
			getPointInstanceQuaternion,
			getPointInstanceScale,
			getPointPosition,
			getRayDirection,
			getRayOrigin,
			getSibbling,
			getSphereCenter,
			getSphereRadius,
			getTexture,
			getTrackedHandIndexDirection,
			getTrackedHandMiddleDirection,
			getTrackedHandPinkyDirection,
			getTrackedHandRingDirection,
			getTrackedHandThumbDirection,
			getVideoPropertyCurrentTime,
			getVideoPropertyDuration,
			getVideoPropertyMuted,
			getVideoPropertyPlaying,
			getWebXRARHitDetected,
			getWebXRARHitMatrix,
			getWebXRARHitPosition,
			getWebXRARHitQuaternion,
			getWebXRControllerAngularVelocity,
			getWebXRControllerHasAngularVelocity,
			getWebXRControllerHasLinearVelocity,
			getWebXRControllerLinearVelocity,
			getWebXRControllerObject,
			getWebXRControllerRay,
			getWebXRTrackedMarkerMatrix,
			globalsCursor,
			globalsRaycaster,
			globalsRayFromCursor,
			globalsTime,
			globalsTimeDelta,
			hsvToRgb,
			importPrimitiveAttributeNumber,
			intToBool,
			intToFloat,
			isTouchDevice,
			keyboardEventMatchesConfig,
			lengthVector,
			lengthVectorArray,
			lerpColor,
			lerpNumber,
			lerpQuaternion,
			lerpVector2,
			lerpVector3,
			lerpVector4,
			manhattanDistanceVector2,
			manhattanDistanceVector3,
			mathColor_1,
			mathColor_2,
			mathColor_3,
			mathColor_3vvf,
			mathColor_4,
			mathColor_5,
			mathFloat_1,
			mathFloat_2,
			mathFloat_3,
			mathFloat_4,
			mathFloat_5,
			mathPrimArray_1,
			mathPrimArray_2,
			mathPrimArray_3,
			mathPrimArray_4,
			mathPrimArray_5,
			mathVector2_1,
			mathVector2_2,
			mathVector2_3,
			mathVector2_3vvf,
			mathVector2_4,
			mathVector2_5,
			mathVector3_1,
			mathVector3_2,
			mathVector3_3,
			mathVector3_3vvf,
			mathVector3_4,
			mathVector3_5,
			mathVector4_1,
			mathVector4_2,
			mathVector4_3,
			mathVector4_3vvf,
			mathVector4_4,
			mathVector4_5,
			mathVectorArray_1,
			mathVectorArray_2,
			mathVectorArray_3,
			mathVectorArray_4,
			mathVectorArray_5,
			matrix4LookAt,
			matrix4MakeTranslation,
			matrix4Multiply,
			maxLengthVector2,
			maxLengthVector3,
			maxLengthVector4,
			mix,
			mod,
			multAdd,
			multNumber,
			multScalarArrayVectorArray,
			multScalarColor,
			multScalarVector2,
			multScalarVector3,
			multScalarVector4,
			multScalarVectorArray,
			multVector,
			multVectorNumber,
			nearestPosition,
			negate,
			noiseImprovedVector3,
			noiseSimplexVector2,
			noiseSimplexVector3,
			noiseSimplexVector4,
			normalizeVector2,
			normalizeVector3,
			normalizeVector4,
			object3DLocalToWorld,
			object3DWorldToLocal,
			objectAddEventListeners,
			objectAddOnBeforeDeleteEventListener,
			objectDelete,
			objectDispatchEvent,
			objectUpdateMatrix,
			objectUpdateWorldMatrix,
			onPerformanceChange,
			onViewerControlsEvent,
			orArrays,
			orBooleans,
			particlesSystemReset,
			particlesSystemStepSimulation,
			pauseAudioSource,
			physicsDebugUpdate,
			physicsRBDAddForce,
			physicsRBDAddForceAtPoint,
			physicsRBDAddTorque,
			physicsRBDApplyImpulse,
			physicsRBDApplyImpulseAtPoint,
			physicsRBDApplyTorqueImpulse,
			physicsRBDDelete,
			physicsRBDResetAll,
			physicsRBDResetForces,
			physicsRBDResetTorques,
			physicsWorldReset,
			physicsWorldStepSimulation,
			planeSet,
			playAnimation,
			playAudioSource,
			playerMode,
			playerPhysicsUpdate,
			playerSimpleUpdate,
			playInstrumentNote,
			polarTransform,
			pressButtonParam,
			previousValueColor,
			previousValuePrimitive,
			previousValueVector2,
			previousValueVector3,
			previousValueVector4,
			primitiveNeighbourIndex,
			primitiveNeighboursCount,
			quaternionAngleTo,
			quaternionSetFromAxisAngle,
			quaternionSetFromEuler,
			quaternionSlerp,
			radToDeg,
			rand,
			random,
			rayDistanceToPlane,
			rayFromCamera,
			rayIntersectBox3,
			rayIntersectObject3D,
			rayIntersectPlane,
			rayIntersectsBox3,
			rayIntersectsObject3D,
			rayIntersectSphere,
			rayIntersectsPlane,
			rayIntersectsSphere,
			raySet,
			renderPixel,
			rotateWithAxisAngle,
			rotateWithQuaternion,
			SDF2DBox,
			SDF2DCircle,
			SDF2DCross,
			SDF2DHeart,
			SDF2DRoundedX,
			SDFBox,
			SDFElongateFast,
			SDFElongateSlow,
			SDFIntersect,
			SDFOnion,
			SDFPlane,
			SDFRevolutionX,
			SDFRevolutionY,
			SDFRevolutionZ,
			SDFSmoothIntersect,
			SDFSmoothSubtract,
			SDFSmoothUnion,
			SDFSphere,
			SDFSubtract,
			SDFTorus,
			SDFTransform,
			SDFTube,
			SDFUnion,
			setCameraViewOffset,
			setCSSObjectClass,
			setGeometryInstanceAttributeColor,
			setGeometryInstanceAttributeFloat,
			setGeometryInstanceAttributeQuaternion,
			setGeometryInstanceAttributeVector2,
			setGeometryInstanceAttributeVector3,
			setGeometryInstanceAttributeVector4,
			setGeometryInstancePositions,
			setGeometryInstanceQuaternions,
			setGeometryInstanceScales,
			setGeometryInstanceTransforms,
			setGeometryPositions,
			setMaterialAlphaMap,
			setMaterialAOMap,
			setMaterialColor,
			setMaterialDisplacementMap,
			setMaterialEmissiveColor,
			setMaterialEmissiveMap,
			setMaterialEnvMap,
			setMaterialMap,
			setMaterialMetalnessMap,
			setMaterialOpacity,
			setMaterialRoughnessMap,
			setMaterialUniformNumber,
			setMaterialUniformTexture,
			setMaterialUniformVectorColor,
			setObjectAttribute,
			setObjectCastShadow,
			setObjectFrustumCulled,
			setObjectLookAt,
			setObjectMaterial,
			setObjectMaterialColor,
			setObjectMatrix,
			setObjectMatrixAutoUpdate,
			setObjectPolarTransform,
			setObjectPosition,
			setObjectQuaternion,
			setObjectReceiveShadow,
			setObjectRotation,
			setObjectScale,
			setObjectVisible,
			setParamBoolean,
			setParamBooleanToggle,
			setParamColor,
			setParamFloat,
			setParamInteger,
			setParamString,
			setParamVector2,
			setParamVector3,
			setParamVector4,
			setPerspectiveCameraFov,
			setPerspectiveCameraNearFar,
			setPhysicsRBDAngularVelocity,
			setPhysicsRBDCapsuleProperty,
			setPhysicsRBDConeProperty,
			setPhysicsRBDCuboidProperty,
			setPhysicsRBDCylinderProperty,
			setPhysicsRBDLinearVelocity,
			setPhysicsRBDPosition,
			setPhysicsRBDRotation,
			setPhysicsRBDSphereProperty,
			setPhysicsWorldGravity,
			setPlayerInput,
			setPointAttributeColor,
			setPointAttributeNumber,
			setPointAttributeVector2,
			setPointAttributeVector3,
			setPointAttributeVector4,
			setPointIndex,
			setPointInstanceLookAt,
			setPointInstancePosition,
			setPointInstanceQuaternion,
			setPointInstanceScale,
			setPointPosition,
			setSpotLightIntensity,
			setViewer,
			setViewerControls,
			setWFCSoftConstraint,
			sizzleVec3XY,
			sizzleVec3XZ,
			sizzleVec3YZ,
			sizzleVec4WArray,
			sizzleVec4XYZ,
			sizzleVec4XYZArray,
			sleep,
			smootherstep,
			smoothstep,
			softBodyConstraintCreate,
			softBodyConstraintDelete,
			softBodyConstraintSetPosition,
			softBodyMultiplyVelocity,
			softBodySetPosition,
			softBodySolverStepSimulation,
			sphereSet,
			subtractNumber,
			subtractVector,
			subtractVectorNumber,
			trackFace,
			trackFaceGetLandmarks,
			trackHand,
			trackHandGetNormalizedLandmarks,
			trackHandGetWorldLandmarks,
			triggerFilter,
			triggerSwitch,
			triggerTwoWaySwitch,
			vec2ToVec3,
			vec3ToColor,
			vec3ToVec4,
			vector3AngleTo,
			vector3Project,
			vector3ProjectOnPlane,
			vector3Unproject,
			WFCBuild,
		].forEach((f) => poly.registerNamedFunction(f));
	}
}
