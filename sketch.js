//declares variables
const Engine = Matter.Engine;
const World = Matter.World;
//what?
//whats the difference between Bodies and Body
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1, sand2, sand3, sand4;
var iron;

function preload()
{
	
}

function setup() {
	//canvas
	createCanvas(800, 700);

	//creates the engine
	engine = Engine.create();
	//sets a variable for the world
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350);

	plane = new Plane(400,650,800,10);

	stone = new Stone(350,640,50,50);

	rubber = new Rubber(390,640,50);

	sand1 = new Sand(390,640,10);
	sand2 = new Sand(380,640,10);
	sand3 = new Sand(370,640,10);
	sand4 = new Sand(360,640,10);

	iron = new Iron(360,640,50,50);

	

	//what?
	//why does it run faster after i comment the line below
	//Engine.run(engine);
  
}


function draw() {
	//background
  background("lightblue");
  //updates
  Engine.update(engine);
  //displays hammer
  hammer.display();

  //displays plane
  plane.display();

  //displays stone
  stone.display();
 
  //displays rubber
  rubber.display();

  //displays sand
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();

  //displays iron
  iron.display();
}



