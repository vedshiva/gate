class Player{
    constructor(){

    }
    getCount (){
        var playerCountRef = database.ref("playerCount");

        playerCountRef.on("value",function (data){
            playerCount = data.val();
        })

    }
    updateCount (count){
        var playerCountRef = database.ref("/");

        playerCountRef.update({
            playerCount : count
        });
    }
    update(name){
        var playerIndex = "player"+playerCount;
        var playerName = database.ref(playerIndex);
        playerName.set({
            name : name
        })
    }
}