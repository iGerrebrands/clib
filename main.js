import clib from "./canvas/clib";

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);

class myRect extends clib.Rectangle {
    /**
     * @param {Vector2D} posVector
     * @param {Vector2D} sizeVector
     * @param {string} color
     * @param {boolean} filled
     */
    constructor(posVector, sizeVector, color, filled) {
        super(posVector, sizeVector, color, filled);
    }

    update() {
        this.pos.y += 1;
        if(this.pos.y > clib.canvas.elem.height + this.sizeVector.y) {
            clib.canvas.addObject(new myRect(new clib.Vector2D(this.pos.x, 0), new clib.Vector2D(80, 40), '#0022fe', true));
            clib.canvas.deleteObject(this);
        }
    }
}

clib.canvas.addObject(new myRect(new clib.Vector2D(0, 0), new clib.Vector2D(80, 40), '#0022fe', true));
clib.canvas.addObject(new myRect(new clib.Vector2D(90, 0), new clib.Vector2D(80, 40), '#0022fe', true));
clib.canvas.addObject(new myRect(new clib.Vector2D(180, 0), new clib.Vector2D(80, 40), '#ff010f', true));
clib.canvas.addObject(new myRect(new clib.Vector2D(270, 0), new clib.Vector2D(80, 40), '#0022fe', true));
clib.canvas.addObject(new myRect(new clib.Vector2D(360, 0), new clib.Vector2D(80, 40), '#0022fe', true));

clib.setUpdateLoop(() => {
}, 50);

