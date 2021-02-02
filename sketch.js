
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand;
var polygon;
var score = 0;
var backgroundImg;
function preload()
{
  polygon_img = loadImage("polygon.png")
  getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

    stand = new Ground(385,315,250,25);
    // level one
    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);

    // level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    // level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    // top 
    block16 = new Box(390,155,30,40);

   

    slingShot = new SlingShot(this.polygon,{x:100,y:200})
    Engine.run(engine);
  
}


function draw() {
  
  if(backgroundImg)
        background(backgroundImg);
  
 
  text("Score : " + score,750,40)

stand.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = ("white");
  }
  else{
      bg=  ("black");
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
