import NotImplementedError from '../Error/NotImplementedError';

export default class IShape {
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