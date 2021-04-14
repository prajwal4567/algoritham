var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(600,200,50,50);
  movingrect.shapeColor="green";
  fixedrect.velocityX=2;
  movingrect.velocityX=-2;
}
function draw() {
  background(255,255,255);
 // movingrect.x=mouseX;
 // movingrect.y=mouseY;
  if(fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 && 
    movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2 && 
    movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2){
   movingrect.shapeColor="red";
   fixedrect.shapeColor="red";
  }else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  if(fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 && 
    movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2){
      fixedrect.velocityX=fixedrect.velocityX*(-1);
      movingrect.velocityX=movingrect.velocityX*(-1);
    }
   if(fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2 && 
    movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2){
      fixedrect.velocityY=fixedrect.velocityY*(-1);
      movingrect.velocityY=movingrect.velocityY*(-1);
    }
  drawSprites();
}