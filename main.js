import clib from "./canvas/clib";

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);

let iSquare = clib.canvas.addObject(new clib.Square(new clib.Vector2D(0,0), 20, '#81ff00', true, 0));
let bool = false;


clib.setUpdateLoop(() => {



    if(!bool) {
        bool = iSquare.size.increaseWithLimit(new clib.Vector2D(5, 2), new clib.Vector2D(200, 200));
    } else {
        bool = !iSquare.size.decreaseWithLimit(new clib.Vector2D(3, 8), new clib.Vector2D(20, 20));
    }



}, 50);