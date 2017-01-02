import clib from "./canvas/clib";

import image from './resources/images/test.png';

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);

clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(5, 12), new clib.Vector2D(80, 50), 1));
clib.canvas.addObject(new clib.Square(new clib.Vector2D(0,0), 80, '#81ff00', true, 0));

clib.setUpdateLoop(() => {



}, 50);