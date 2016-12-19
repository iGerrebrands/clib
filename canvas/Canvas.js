export default class Canvas {

    /**
     * @param {Vector2D} size
     * @param {string} query
     */
    constructor (size, query) {
        this.elem = document.querySelector(query);
        this.pen = this.elem.getContext('2d');
        this.elem.width = size.x;
        this.elem.height = size.y;
        this.elem.style.width =  `${size.x}px`;
        this.elem.style.height = `${size.y}px`;
        this.objects = [];
    }

    draw() {
        this.pen.clearRect(0, 0, this.elem.width, this.elem.height);
        this.objects.forEach((obj) => {
            obj.draw(this);
        });
    }

    /** @param {IShape} object **/
    addObject(object) {
        object.id = this.objects.length;
        this.objects.push(object);
        this.objects = this.objects.sort((a, b) => {
            return a.layer - b.layer;
        });
        return object;
    }

    /** @param {IShape} obj **/
    deleteObject(obj) {
        let index = this.objects.indexOf(obj);
        if(index > -1) {
            this.objects.splice(index, 1);
        }
    }

}