const {Engine, World, Bodies} = Matter;
var engine, world;
var drops = [];
var drop1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for (i = 0; i < 10; i++) {
    drop1 = new Drop();
    drops.push(drop1);
  }
}

function draw() {
  background(0, 30, 5);
  Engine.update(engine);
  for (i = 0; i < 1; i++) {
    drop1 = new Drop();
    drops.push(drop1);
  }
  for (i = 0; i < drops.length; i++) {
    drops[i].display();
  }
}
