
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango2,mango3,mango4
var boy

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 =new Stone(235,420,30)
	mango1 = new Mango(200,200,50)
	boy = createSprite(200,200,20,20)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

 
  
  drawSprites();

  stone1.display()
  mango1.display()

 
}



