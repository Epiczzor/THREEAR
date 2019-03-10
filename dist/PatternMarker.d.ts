import { Object3D } from "three";
/**
 * PatternMarker takes a given image (as a URL) and use this as the pattern to detect to place
 * a given marker from three.js, in this case an given Object3D
 * @param parameters parameters for determining things the pattern URL and minimum confidence
 */
export declare class PatternMarker {
	static markerCount: number;
	id: number;
	size: number;
	minConfidence: number;
	patternUrl: string;
	markerObject: Object3D;
	constructor(parameters: any);
}
export default PatternMarker;
