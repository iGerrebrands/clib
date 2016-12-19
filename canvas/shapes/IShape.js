import NotImplementedError from '../Error/NotImplementedError';

export default class IShape {
    constructor () {
        this.id = -1;
    }

    /** {Canvas} canvas **/
    draw (canvas) {
        throw new NotImplementedError('[clib] The function IShape:draw has not been implemented.');
    }

    update() {}
}