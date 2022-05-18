const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, cannonball;




function preload() {
  towerImage = loadImage("./assets/tower.png");

  NotGround = loadImage("./assets/background.gif");

}

function setup() {

  cannon = new notcannon(135,240,180,60,0.5);

  cannonball = new notcannonball(200,200,200,200);

  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(100, 450, 160, 310);


}

function draw() {
  background(80,80,255);

  image(NotGround,0,0,width,height);

  Engine.update(engine);

  ground.display();
  
  tower.display();
  
  cannon.display();

  cannonball.display();

}
