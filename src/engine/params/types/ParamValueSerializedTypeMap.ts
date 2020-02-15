// import {BooleanParam} from 'src/engine/params/Boolean';
// import {ButtonParam} from 'src/engine/params/Button';
// import {ColorParam} from 'src/engine/params/Color';
// import {FloatParam} from 'src/engine/params/Float';
// import {IntegerParam} from 'src/engine/params/Integer';
// import {OperatorPathParam} from 'src/engine/params/OperatorPath';
// import {RampParam} from 'src/engine/params/Ramp';
// import {SeparatorParam} from 'src/engine/params/Separator';
// import {StringParam} from 'src/engine/params/String';
// import {Vector2Param} from 'src/engine/params/Vector2';
// import {Vector3Param} from 'src/engine/params/Vector3';
// import {Vector4Param} from 'src/engine/params/Vector4';
import {RampValueJson} from 'src/engine/params/ramp/RampValue';
import {ParamType} from 'src/engine/poly/ParamType';
import {ParamInitValuesTypeMap} from './ParamInitValuesTypeMap';

type ParamValueSerializedTypeMapGeneric = {[key in ParamType]: any};
export interface ParamValueSerializedTypeMap extends ParamValueSerializedTypeMapGeneric {
	[ParamType.BOOLEAN]: boolean;
	[ParamType.BUTTON]: ParamInitValuesTypeMap[ParamType.BUTTON];
	[ParamType.COLOR]: Number3;
	[ParamType.FLOAT]: number;
	[ParamType.FOLDER]: null;
	[ParamType.INTEGER]: number;
	[ParamType.OPERATOR_PATH]: ParamInitValuesTypeMap[ParamType.OPERATOR_PATH];
	[ParamType.RAMP]: RampValueJson;
	[ParamType.SEPARATOR]: ParamInitValuesTypeMap[ParamType.SEPARATOR];
	[ParamType.STRING]: ParamInitValuesTypeMap[ParamType.STRING];
	[ParamType.VECTOR2]: Number2;
	[ParamType.VECTOR3]: Number3;
	[ParamType.VECTOR4]: Number4;
}