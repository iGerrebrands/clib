export default class Vector2D {

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    diff (vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    add(vector) {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    dec(vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

}