  /* Sets the variables red, green, and blue to their rgb values and then stores them in the colors 	 array */
  var red = "rgb(255, 0, 0)"
  var green = "rgb(0, 128, 0)"
  var blue = "rgb(0, 0, 255)"
  var colors = [red, green, blue];
  
  // Sets up scoreboard variables
  var wins = 0;
  var losses = 0;
  var forfeits = 0;

  // this variable is used to ensure user can only get credit for 1 win/loss per game
  var gameOver = false;
  
  // this variable is used to make sure someone can't start the game prematurely
  var gameStart = false;
  
  var forfeitGame = false;

  // after the page loads, put up the scoreboard and then create a new board
  $(document).ready(function () {

      $('#scoreBoard').html("Wins: " + wins + " Losses: " + losses + " Forfeits: " + forfeits);

      newBoard();

  });

  /* blank out the previous results, create variables for each piece with a random color chosen from
  	 the colors array, change each piece to the random color and then after seven seconds, turn
  	 all pieces black */
  function newBoard() {

	  window.gameOver = false;
	  window.gameStart = false;
	  window.forfeitGame = false;

      $('#results').html("");

      window.piece1Color = parseInt(Math.random() * (colors.length));
      window.piece2Color = parseInt(Math.random() * (colors.length));
      window.piece3Color = parseInt(Math.random() * (colors.length));
      window.piece4Color = parseInt(Math.random() * (colors.length));
      window.piece5Color = parseInt(Math.random() * (colors.length));
      window.piece6Color = parseInt(Math.random() * (colors.length));
      window.piece7Color = parseInt(Math.random() * (colors.length));
      window.piece8Color = parseInt(Math.random() * (colors.length));
      window.piece9Color = parseInt(Math.random() * (colors.length));

      $('#piece1').css('background-color', colors[piece1Color]);
      $('#piece2').css('background-color', colors[piece2Color]);
      $('#piece3').css('background-color', colors[piece3Color]);
      $('#piece4').css('background-color', colors[piece4Color]);
      $('#piece5').css('background-color', colors[piece5Color]);
      $('#piece6').css('background-color', colors[piece6Color]);
      $('#piece7').css('background-color', colors[piece7Color]);
      $('#piece8').css('background-color', colors[piece8Color]);
      $('#piece9').css('background-color', colors[piece9Color]);

      setTimeout(blackBoard, 7000);

  }

  // Turns the board black
  function blackBoard() {
      $('.piece').css('background-color', "black");
      $('.piece').css('border', "1px solid white");
      window.gameStart = true;
  }

  /* if the user clicks on the piece and it's red, turn it green, if green, turn blue, else, turn 
  	 it red */
  $('.piece').click(function () {

      var currentColor = $(this).css('background-color');

      if (currentColor == red) {
          $(this).css('background-color', "green");
      } else if (currentColor == green) {
          $(this).css('background-color', "blue");
      } else {
          $(this).css('background-color', "red");
      }
  })

  /* test to see if the current board layout matches the solution and if so changes the results to
     'you win' or if incorrect 'you lose'. update the scoreboard after each check */
   $('#done').click(function () {

      var piece1CurrentColor = $('#piece1').css('background-color');
      var piece2CurrentColor = $('#piece2').css('background-color');
      var piece3CurrentColor = $('#piece3').css('background-color');
      var piece4CurrentColor = $('#piece4').css('background-color');
      var piece5CurrentColor = $('#piece5').css('background-color');
      var piece6CurrentColor = $('#piece6').css('background-color');
      var piece7CurrentColor = $('#piece7').css('background-color');
      var piece8CurrentColor = $('#piece8').css('background-color');
      var piece9CurrentColor = $('#piece9').css('background-color');


      if (gameStart == true && piece1CurrentColor == colors[piece1Color] && piece2CurrentColor == colors[piece2Color] && piece3CurrentColor == colors[piece3Color] && piece4CurrentColor == colors[piece4Color] && piece5CurrentColor == colors[piece5Color] && piece6CurrentColor == colors[piece6Color] && piece7CurrentColor == colors[piece7Color] && piece8CurrentColor == colors[piece8Color] && piece9CurrentColor == colors[piece9Color]) {


          
          	if (gameOver == false && forfeitGame == false) {
          	    $('#results').html("You win!");
			  	window.gameOver = true;
			  	window.wins = wins + 1;
			  	$('#scoreBoard').html("Wins: " + wins + " Losses: " + losses + " Forfeits: " + forfeits);
			}
      } 
      
      else if (gameStart == false) {
	      $('#results').html("Wait!");
      }
      
      else {
            if (gameOver == false) {
            	$('#results').html("You lose!");
            	window.gameOver = true;
				window.losses = losses + 1;
				$('#scoreBoard').html("Wins: " + wins + " Losses: " + losses + " Forfeits: " + forfeits);
			}
      }
  })

   // after clicking the reset button, draw a new board
   $('#reset').click(function () {

      newBoard();

  })
 
  // after clicking the give-up button, show the solution
   $('#giveUp').click(function () {
      
     
      $('#piece1').css('background-color', colors[piece1Color]);
      $('#piece2').css('background-color', colors[piece2Color]);
      $('#piece3').css('background-color', colors[piece3Color]);
      $('#piece4').css('background-color', colors[piece4Color]);
      $('#piece5').css('background-color', colors[piece5Color]);
      $('#piece6').css('background-color', colors[piece6Color]);
      $('#piece7').css('background-color', colors[piece7Color]);
      $('#piece8').css('background-color', colors[piece8Color]);
      $('#piece9').css('background-color', colors[piece9Color]);

       if (gameOver == false) {window.forfeits = forfeits + 1;
      window.gameOver = true;
      window.forfeitGame = true;
	  
      $('#scoreBoard').html("Wins: " + wins + " Losses: " + losses + " Forfeits: " + forfeits);
      }
  })