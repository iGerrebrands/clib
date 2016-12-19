import clib from "./canvas/clib";

import image from './resources/images/test.png';

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);
clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(0, 0), new clib.Vector2D(80, 50), 0));
clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(0, 0), new clib.Vector2D(80, 50), 2));
clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(0, 0), new clib.Vector2D(80, 50), 4));
clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(0, 0), new clib.Vector2D(80, 50), 1));
clib.canvas.addObject(new clib.Image(image, new clib.Vector2D(0, 0), new clib.Vector2D(80, 50), 0));

clib.setUpdateLoop(() => {

}, 50);

