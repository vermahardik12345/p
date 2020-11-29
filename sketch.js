
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	paper1=new paper(50,50);
	ground1=new Ground(700,680,2000,15);
    dustbin1=new dustbin(1200,678,170,15);
	dustbin2=new dustbin(1190,678,15,170);
	dustbin3=new dustbin(1210,678,15,170);
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background(0);
 ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
 keyPressed();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
	}
 }
 


