class Player {
    constructor() {
        this.Index = null;
        this.Name = null;
        this.distance = 0;


    }
    //to get playerCOunt from database
    getCount() {
        var playersRef = database.ref('playerCount');
        playersRef.on("value", function (data) {
            playerCount = data.val()
        });
    }

    //to update playerCOunt in database    
    updateCount(count) {
        database.ref('/').update({ playerCount: count })
    }


    //to update player name in database  player1, player2
    update() {
        var playerIndex = "players/player" + this.Index;
        database.ref(playerIndex).set({ name: this.Name , distance:this.distance});
    }
    static playerNames() {
        var playersRef = database.ref('players');
        playersRef.on("value", (data) => {
            playerData = data.val()
        });
    }
}