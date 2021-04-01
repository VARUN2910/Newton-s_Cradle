const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	Bob1 = new Ball(300,350,25,25);
	Bob2 = new Ball(350,350,25,25);
	Bob3 = new Ball(400,350,25,25);
	Bob4 = new Ball(450,350,25,25);
	Bob5 = new Ball(500,350,25,25);

	Roof = new roof1(200,65,300,30);

	Rope1 = new rope(Bob1.body,Roof.body,100,60);
	Rope2 = new rope(Bob2.body,Roof.body,150,60);
	Rope3 = new rope(Bob3.body,Roof.body,200,60);
	Rope4 = new rope(Bob4.body,Roof.body,250,60);
	Rope5 = new rope(Bob5.body,Roof.body,300,60);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(160);

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();

  Roof.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();



  drawSprites();
}
function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-200,y:10});
   }
	
}
