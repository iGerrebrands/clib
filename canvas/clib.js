import './prototype/Object';
import Vector2D from './vector/Vector2D';
import Canvas from './Canvas';
import Rectangle from './shapes/Rectangle';
import AnimationFrame from './loops/AnimationFrame';
import BaseAnimationFrame from './loops/BaseAnimationFrame';

export default {
    Vector2D: Vector2D,
    Canvas: Canvas,
    canvas: null,
    Rectangle: Rectangle,
    animationFrame: null,
    /**
     * @param {Vector2D} size
     * @param {String} elem
     * @param {number} fps
     */
    createCanvas: function (size, elem, fps) {
        this.canvas = new Canvas(size, elem);
        this.animationFrame = new AnimationFrame(this.canvas, fps);
        this.animationFrame.run();
    },
    /**
     * @param {Function} update
     * @param {number} fps
     */
    setUpdateLoop: function (update, fps) {
        let _this = this;
        let updateMethod = function () {
            _this.canvas.objects.forEach((obj) => {
                obj.update();
            });
            update();
        };
        let updateLoop = new BaseAnimationFrame(updateMethod, fps);
        updateLoop.run();
    }
};