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

    increaseWithLimit(step, max) {
        this.x = this.x + step.x >= max.x ? max.x : this.x + step.x;
        this.y = this.y + step.y >= max.y ? max.y : this.y + step.y;
        return this.x === max.x && this.y === max.y;
    }

    decreaseWithLimit(step, min) {
        this.x = this.x - step.x <= min.x ? min.x : this.x - step.x;
        this.y = this.y - step.y <= min.y ? min.y : this.y - step.y;
        return this.x === min.x && this.y === min.y;
    }

}