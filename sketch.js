var balloon,balloonImage1,balloonImage2; 
var database; 
var height;


function preload()
{ bg =loadImage("Images/bal1.png"); 
ballonImage1=loadAnimation("Images/bal2.png");
balloonImage2=loadAnimation("images/bal2.png","images/bal2.png","images/bal2.png","images/bal3.png","images/bal3.png","images/bal3.png","images/bal4.png","images/bal4.png","images/bal4.png")
}
  function setup(){
database=firebase.database();
createCanvas(1500,700)
balloon=createSprite(250,650,150,150); 
balloon.addAnimation("hotAirBalloon",ballonImage1); 
balloon.scale=0.5;
var balloonHeight=database.ref('balloon/height')
balloonHeight.on("value",readHeight,showError)
  }


function draw(){
    background(bg)
    if(keyDown(LEFT_ARROW)){ 
      updateHeight(-10,0);
       balloon.addAnimation("hotAirBalloon",balloonImage2);
       }
       else if(keyDown(RIGHT_ARROW)){
          updateHeight(10,0);
           balloon.addAnimation("hotAirBalloon",balloonImage2);}
           else if(keyDown(UP_ARROW)){ 
             updateHeight(0,-10);
              balloon.addAnimation("hotAirBalloon",balloonImage2); 
              balloon.scale=balloon.scale -0.005; }
              else if(keyDown(DOWN_ARROW)){ 
                updateHeight(0,+10);
                 balloon.addAnimation("hotAirBalloon",balloonImage2);
                  balloon.scale=balloon.scale+0.005; }

drawSprites();

}
function readHeight(data){
height=data.val();
balloon.x=height.x;
balloon.y=height.y;

}
function showError(){
   console.log("Error in writing to the database");
  
  
  }
  function updateHeight(x,y){
database.ref('balloon/height').set({
  'x':height.x+x,
  'y':height.y+y
})

  }