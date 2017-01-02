import clib from './canvas/clib';
import Square from './canvas/shapes/Square';

export default class Block extends Square {

    constructor(spawner) {
        super(new clib.Vector2D(0,0), 20, '#ff24e4', true, 1);
        this.spawner = spawner;
    }

    update() {
        if(this.pos.increaseWithLimit(new clib.Vector2D(3, 3), new clib.Vector2D(200, 200))) {
            this.spawner.deleteBlock(this);
        }
    }

}