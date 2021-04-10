class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    //creating reset button as a property of the form class 
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
   //when reset button is pressed we want all the properties in the database to get reset 
    this.reset.mousePressed(()=>{
   //updating the value of playerCount in the database as 0
      player.updateCount(0);
   //updating the value of gameState in the database as 0 
      game.update(0);
      //updating the rank of player should be 0
      Player.updateCarsAtEnd(0)
      //removing the entire players property should get reset
      database.ref("/").child("players").remove()
    });

  }
}
