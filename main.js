canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

white_car_width = 75;
white_car_height = 100;

background_image = "parkinglot.jpeg";
whitecar_image = "white_car.png";

whitecar_x = 5;
whitecar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	whitecar_imgTag = new Image();
	whitecar_imgTag.onload = uploadcar;
	whitecar_imgTag.src = whitecar_image;

    function uploadBackground(){
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }
    
    function uploadcar() {
	ctx.drawImage(whitecar_imgTag, whitecar_x,whitecar_y, whitecar_width, whitecar_height);
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(whitecar_y >=0)
	{
		whitecar_y = whitecar_y - 10;
		console.log("When up arrow is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		 uploadBackground();
		 uploadcar();
		
	}
}

function down()
{
	if(whitecar_y <=350)
	{
		whitecar_y =whitecar_y+ 10;
		console.log("When down arrow is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		uploadBackground();
		uploadcar();
		
	}
}

function left()
{
	if(whitecar_x >= 0)
	{
		whitecar_x =whitecar_x - 10;
		console.log("When left arrow is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		uploadBackground();
		 uploadcar();
		
	}
}

function right()
{
	if(whitecar_x <= 750)
	{
		whitecar_x =whitecar_x + 10;
		console.log("When right arrow is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		uploadBackground();
		uploadcar();
		
   }
}