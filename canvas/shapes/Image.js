import Rectangle from './Rectangle';

export default class Image extends Rectangle{

    /**
     * @param img
     * @param {Vector2D} posVector
     * @param {Vector2D} sizeVector
     * @param {number} layerIndex
     */
    constructor (img, posVector, sizeVector, layerIndex) {
        super(posVector, sizeVector, null, null, layerIndex);
        this.img = new window.Image();
        this.img.src = img;
    }

    /** @param {Canvas} canvas **/
    draw (canvas) {
        canvas.pen.drawImage(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

}