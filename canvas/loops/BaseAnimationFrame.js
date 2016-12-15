export default class BaseAnimationFrame {

    /**
     * @param {Function} update
     * @param {number} fps
     */
    constructor(update, fps) {
        this.update = update;
        this.fps = fps;
        this.renderSettings = {
            now: 0,
            then: Date.now(),
            delta: 0
        };
    }

    run() {
        let render = () => {
            requestAnimationFrame(render);
            this.renderSettings.now = Date.now();
            this.renderSettings.delta = this.renderSettings.now - this.renderSettings.then;
            if(this.renderSettings.delta > 1000 / this.fps) {
                this.update();
                this.renderSettings.then = this.renderSettings.now - (this.renderSettings.delta % 1000 / this.fps);
            }

        };

        requestAnimationFrame(() => {
            render();
        });
    }

}