import BaseAnimationFrame from './BaseAnimationFrame';

export default class AnimationFrame extends BaseAnimationFrame {

    /**
     * @param {Canvas} canvas
     * @param {number} fps
     */
    constructor(canvas, fps) {
        super(function () {
            canvas.draw();
        }, fps);
    }

}