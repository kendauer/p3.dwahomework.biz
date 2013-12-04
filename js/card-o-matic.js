$( document ).ready(function() {

  var colors = ["red", "green", "blue"];
  var piece1Color = parseInt(Math.random()*(colors.length));
  var piece2Color = parseInt(Math.random()*(colors.length));
  var piece3Color = parseInt(Math.random()*(colors.length));
  var piece4Color = parseInt(Math.random()*(colors.length));
  var piece5Color = parseInt(Math.random()*(colors.length));
  var piece6Color = parseInt(Math.random()*(colors.length));
  var piece7Color = parseInt(Math.random()*(colors.length));
  var piece8Color = parseInt(Math.random()*(colors.length));
  var piece9Color = parseInt(Math.random()*(colors.length));
  	console.log(colors[piece1Color]);
  	console.log(colors[piece2Color]);
  	console.log(colors[piece3Color]);
  	console.log(colors[piece4Color]);
  	console.log(colors[piece5Color]);
  	console.log(colors[piece6Color]);
  	console.log(colors[piece7Color]);
  	console.log(colors[piece8Color]);
  	console.log(colors[piece9Color]);
  $('#piece1').css('background-color', colors[piece1Color]);
  $('#piece2').css('background-color', colors[piece2Color]);
  $('#piece3').css('background-color', colors[piece3Color]);
  $('#piece4').css('background-color', colors[piece4Color]);
  $('#piece5').css('background-color', colors[piece5Color]);
  $('#piece6').css('background-color', colors[piece6Color]);
  $('#piece7').css('background-color', colors[piece7Color]);
  $('#piece8').css('background-color', colors[piece8Color]);
  $('#piece9').css('background-color', colors[piece9Color]);

});

$('.piece').click(function() {

	
	var currentColor = $(this).css('background-color');
	var red = "rgb(255, 0, 0)"
	var green = "rgb(0, 128, 0)"
	var blue = "rgb(0, 0, 255)"
	
	console.log(currentColor);
	console.log(red);
	
	if (currentColor == red) {
		$(this).css('background-color', "green");
	}
	else if (currentColor == green) {
		$(this).css('background-color', "blue");
	}
	else  {
	$(this).css('background-color', "red");
	}
})

