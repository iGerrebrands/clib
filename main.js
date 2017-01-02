import clib from "./canvas/clib";
import Spawner from "./Spawner";

clib.createCanvas(new clib.Vector2D(500, 500), '.canvas', 50);

let spawner = new Spawner(clib.canvas);
clib.canvas.addObject(spawner);

clib.setUpdateLoop(() => {

}, 50);