var movingrect;
var fixedrect;



function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(400,200,50,50)
movingrect.shapeColor = 'blue';
fixedrect.shapeColor = 'red';

}

function draw() {
  background(255,255,255);  

movingrect.x = mouseX;
movingrect.y = mouseY;

if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) { 

  movingrect.shapeColor = 'pink';
  fixedrect.shapeColor = 'green';
}

else{

  movingrect.shapeColor = 'blue';
  fixedrect.shapeColor = 'red';


  
}


  





  drawSprites();






}