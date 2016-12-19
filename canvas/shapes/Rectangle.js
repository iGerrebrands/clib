import IShape from './IShape';

export default class Rectangle extends IShape{

    /**
     * @param {Vector2D} posVector
     * @param {Vector2D} sizeVector
     * @param {string} color
     * @param {boolean} filled
     */
    constructor(posVector, sizeVector, color, filled, layer) {
        super(layer);
        this.pos = posVector;
        this.sizeVector = sizeVector;
        this.color = color;
        this.filled = filled;
    }

    /** @param {Canvas} canvas **/
    draw(canvas) {
        if(this.filled) {
            canvas.pen.fillStyle = this.color;
            canvas.pen.fillRect(this.pos.x, this.pos.y, this.sizeVector.x, this.sizeVector.y);
        } else {
            canvas.pen.strokeStyle = this.color;
            canvas.pen.strokeRect(this.pos.x, this.pos.y, this.sizeVector.x, this.sizeVector.y);
        }
    }

}