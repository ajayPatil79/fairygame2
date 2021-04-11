var starImg,bgImg;
var star, starBody;
var fairySprite,fairy_flying,fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy_flying = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	fairySound.play();

	fairySprite = createSprite(100,400);
	fairySprite.addAnimation("flying",fairy_flying);
	fairySprite.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 370 && starBody.position.y > 370){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === RIGHT_ARROW){
		fairySprite.x=fairySprite.x+20;
	}

	if (keyCode === LEFT_ARROW){
		fairySprite.x=fairySprite.x+-20;
		fairySprite.addImage(fairyIMG2);
	}
	
}
