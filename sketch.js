const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var tc1, tc2, tc3;
var ground

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,365,800,15);
	paper = new Paper(130,342.5,18);
	tc1 = new Trashcan(510,298,15,120);
	tc2 = new Trashcan(650,298,15,120);
	tc3 = new Trashcan(580,343,140,30)

	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  paper.display();
  tc1.display();
  tc2.display();
  tc3.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 39, y: -55})
	}
}



