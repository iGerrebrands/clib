import NotImplementedError from '../error/NotImplementedError';

export default class IShape {
    /** @param {number} layer **/
    constructor (layer) {
        this.id = -1;
        this.layer = layer;
    }

    /** {Canvas} canvas **/
    draw (canvas) {
        throw new NotImplementedError('[clib] The function IShape:draw has not been implemented.');
    }

    update() {}
}