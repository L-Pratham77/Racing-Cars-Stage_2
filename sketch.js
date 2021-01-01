
var database, position;
var GameState = 0, playerCount,form, game, player;
var playerData ;
function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.GetState();
  game.Waiting();

/*
  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);*/
}

function draw(){
  
  if(playerCount===4){
    game.update(2);
    
  }
if (GameState===2){
    clear();
     game.play();
}
}
/*
function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
*/