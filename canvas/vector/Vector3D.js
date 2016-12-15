export default class Vector3D {

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /** @param {Vector2D, Vector3D} vector **/
    diff (vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    /** @param {Vector2D, Vector3D} vector **/
    add(vector) {
        if(vector.z) {
            return new Vector3D(this.x + vector.x, this.y + vector.y, this.z + vector.z)
        } else {
            return new Vector3D(this.x + vector.x, this.y + vector.y, this.z);
        }
    }

    /** @param {Vector2D, Vector3D} vector **/
    dec(vector) {
        if(vector.z) {
            return new Vector3D(this.x - vector.x, this.y - vector.y, this.z - vector.z)
        } else {
            return new Vector3D(this.x - vector.x, this.y - vector.y, this.z);
        }
    }

}