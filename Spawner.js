import clib from './canvas/clib';
import Block from './Block';

export default class Spawner extends clib.Square {

    constructor(canvas) {
        super(new clib.Vector2D(0,0), 40, '#ff24e4', true, 0);
        this.squares = [];
        this.spawn = false;
        this.canvas = canvas;
    }

    deleteBlock(block) {
        let index = this.squares.indexOf(block);
        this.canvas.deleteObject(block);
        this.squares.splice(index, 1);
    }

    update() {

        if(!this.spawn) {
            this.spawn = this.size.increaseWithLimit(new clib.Vector2D(5, 5), new clib.Vector2D(60, 60));
            if(this.spawn) {
                let sq = this.canvas.addObject(new Block(this));
                this.squares.push(sq);
            }
        } else {
            this.spawn = !this.size.decreaseWithLimit(new clib.Vector2D(5, 5), new clib.Vector2D(40, 40));
        }

    }

}