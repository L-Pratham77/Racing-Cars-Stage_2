class Game {
    constructor() { }
    Waiting() {
        if (GameState === 0) {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }
    GetState() {
        var gameState = database.ref('GameState');
            gameState.on("value", function (data) {
                             GameState = data.val()
        });
    }
    update(state) {
        database.ref('/').update({ GameState: state })
    }
    play() {
        form.hide();
        textSize(40);
        fill("red");
        text("GAME STARTED", 100, 120);
        console.log(GameState);
        console.log(playerData);
        Player.playerNames();

        if (playerData !== undefined) {
            var displayPosition = 150;
            for (var plr in playerData) {
               if (plr === "player" + player.Index)
                   fill("black");
               else 
                   fill("red");
                displayPosition += 60;
                text(playerData[plr].name + "-" + playerData[plr].distance  , 100, displayPosition);
              
               }
            }

            if(keyIsDown(UP_ARROW)){
                player.distance += 5 ;
                player.update();

            }
        
        }
      
    }
