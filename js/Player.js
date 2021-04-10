class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //creating a new property rank tostore the rank of the players 
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
  
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//static functions are the functions that do not require any object to called them 
//static functions are called using the class name 
  static getPlayerInfo(){
//referring to the players property in the database 
    var playerInfoRef = database.ref('players');
//creating a listener for the value of the same 
    playerInfoRef.on("value",(data)=>{
//storing the information related to all the 4 players inside all players variable
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
