import IShape from './IShape';
import image from '../../resources/images/test.png';

//TODO: Test images loader

export default class Image extends IShape{

    constructor () {
        super();
        this.image = image;
    }

    /** @param {Canvas} canvas **/
    draw (canvas) {

    }

}