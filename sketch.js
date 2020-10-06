
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
G=new Ground(400,680,800,20)
P=new Paper(50,50,20,20)
D=new DustBin(500,650)

var render = Render.create({ element: document.body, engine: engine, options:
	 { width: 800, height: 700, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  G.display();
  P.display();
  D.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(P.body,P.body.Position,{x:50,y:-50})

		
	}
}



