import NotImplementedError from '../error/NotImplementedError';

export default class IShape {
    /** @param {number} layerIndex **/
    constructor (layerIndex) {
        this.id = -1;
        this.layerIndex = layerIndex;
    }

    /** {Canvas} canvas **/
    draw (canvas) {
        throw new NotImplementedError('[clib] The function IShape:draw has not been implemented.');
    }

    update() {}
}