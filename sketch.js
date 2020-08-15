
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob,bob2,bob3,bob4,bob5,bob6;

var roof;
var rope,rope2,rope3,rope4,rope5;
var engine,world

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	bob = new Bob(400,300,20)
	bob2 = new Bob(420,300,20)
	bob3 = new Bob(440,300,20)
	bob4 = new Bob(380,300,20)
	bob5 = new Bob(360,300,20)
	// bob6 = new Bob(300,200,20)

	roof = new Roof(400,200,200,10)
rope = new Rope(bob.body,roof.body,0,0)
rope2 = new Rope(bob2.body,roof.body,35,0)
rope3 = new Rope(bob3.body,roof.body,70,0)
rope4 = new Rope(bob4.body,roof.body,-35,0)
rope5 = new Rope(bob5.body,roof.body,-70,0)

	// Engine.run(engine);
	
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10000,y:0})
	}
}



function draw() {


  background("White");
  Engine.update(engine);  
  
//   bob6.display()

	roof.display()
	rope.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
  
	bob.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

	
}



