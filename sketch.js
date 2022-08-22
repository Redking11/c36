var Ball, database;
var position;
var db
var store
function setup(){

  console.log(database);
  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";
db=firebase.database()
db.ref("ball/position").on("value",readposition)

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}
function writePosition(x,y){
db.ref("ball/position").update({
  x:Ball.x+x,y:Ball.y+y
})
}
function readposition(data){
store=data.val()
Ball.x=store.x
Ball.y=store.y

}
