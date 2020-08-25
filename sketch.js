
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, dustbin2, dustbin3, paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	
    dustbin = new Dustbin(475, 690, 20, 100);
	dustbin2 = new Dustbin(515, 690, 150, 20);
	dustbin3 = new Dustbin(590, 690, 20, 100);
	paperBall = new Paper(100, 550, 12, 12);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paperBall.display();
  drawSprites();
 
}



function keyPressedd(){
if(keyDown(up)){

	Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
}


}