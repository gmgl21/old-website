$(document).ready(function(){

  let projects = [
    
    {name: "TicTacToe",
    image: "./images/ticTacToe.gif", 
    code: "https://github.com/gmgl21/js-tictactoe-game", 
    link: "https://js-tictactoe-game.herokuapp.com/"},
    
    {name: "Simon Game",
    image: "./images/simongame.png", 
    code: "https://github.com/gmgl21/js-simon-game", 
    link: "https://js-simon-game.herokuapp.com/"},
    
    {name: "YelpCamp",    
    image: "./images/yelpcamp.gif", 
    code: "https://github.com/gmgl21/yelpcamp", 
    link: "https://addyelpcamp.herokuapp.com/"},
    
    {name: "Now That's Delicious", 
    image: "./images/nowThatsDelicious.gif", 
    code: "https://github.com/gmgl21/now-thats-delicious", 
    link: "https://now-thatsdelicious.herokuapp.com/"}
    
  ];
    
    
    
    
    for(let i = 0; i < projects.length; i++){
      let project = projects[i];
      $("#portfolio-pg")
      .prepend("<div class='col-md-6' id='project'><h4>"+project.name+"</h4><img src="+project.image+"><div class='btn-group'><a href="+project.code+" class='btn btn-code' role='button' target='blank'>" + "<i class='fa fa-code fa-2x' aria-hidden='true'></i></a><a href="+project.link+" class='btn' role='button' target='blank'><i class='fa fa-link fa-2x' aria-hidden='true'></i></a></div></div>")
    }
});



