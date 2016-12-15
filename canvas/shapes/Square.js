import Rectangle from './Rectangle';
import Vector2D from '../vector/Vector2D';

export default class Square extends Rectangle {

    /**
     * @param {Vector2D} posVector
     * @param {number} size
     * @param {string} color
     * @param {boolean} filled
     */
    constructor(posVector, size, color, filled) {
        super(posVector, new Vector2D(size, size), color, filled);
    }

}