import Rectangle from './Rectangle';
import Vector2D from '../vector/Vector2D';

export default class Square extends Rectangle {

    /**
     * @param {Vector2D} posVector
     * @param {number} size
     * @param {string} color
     * @param {boolean} filled
     * @param {number} layerIndex
     */
    constructor(posVector, size, color, filled, layerIndex) {
        super(posVector, new Vector2D(size, size), color, filled, layerIndex);
    }

}