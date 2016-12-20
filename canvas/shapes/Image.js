import IShape from './IShape';

//TODO: Test images loader

export default class Image extends IShape{

    /**
     * @param img
     * @param {Vector2D} pos
     * @param {Vector2D} size
     * @param {number} layerIndex
     */
    constructor (img, pos, size, layerIndex) {
        super(layerIndex);
        this.img = new window.Image();
        this.img.src = img;
        this.pos = pos;
        this.size = size;
    }

    /** @param {Canvas} canvas **/
    draw (canvas) {
        canvas.pen.drawImage(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

}