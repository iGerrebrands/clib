import clib from "./canvas/clib";

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);

let sqList = [];

let iSquare2 = clib.canvas.addObject(new clib.Square(new clib.Vector2D(0,0), 40, '#ff24e4', true, 1));
iSquare2.sizeBool = false;

clib.setUpdateLoop(() => {

    sqList.forEach((obj) => {
        if(!obj.posBool) {
            obj.posBool = obj.pos.increaseWithLimit(new clib.Vector2D(2, 2), new clib.Vector2D(300, 300));
        } else {
            obj.posBool = !obj.pos.decreaseWithLimit(new clib.Vector2D(2, 2), new clib.Vector2D(20, 20));
            clib.canvas.deleteObject(obj);
            let index = sqList.indexOf(obj);
            sqList.splice(index, 1);
        }
    });

    if(!iSquare2.sizeBool) {
        iSquare2.sizeBool = iSquare2.size.increaseWithLimit(new clib.Vector2D(1, 1), new clib.Vector2D(60, 60));
        if(iSquare2.sizeBool) {
            let sq = clib.canvas.addObject(new clib.Square(new clib.Vector2D(0,0), 20, '#4fff16', true, 0));
            sq.posBool = false;
            sqList.push(sq);
        }
    } else {
        iSquare2.sizeBool = !iSquare2.size.decreaseWithLimit(new clib.Vector2D(1, 1), new clib.Vector2D(40, 40));
    }


    // if(!iSquare2.bool) {
    //     iSquare2.bool = iSquare2.size.increaseWithLimit(new clib.Vector2D(3, 3), new clib.Vector2D(220, 220));
    // } else {
    //     iSquare2.bool = !iSquare2.size.decreaseWithLimit(new clib.Vector2D(2, 2), new clib.Vector2D(20, 20));
    // }

}, 50);