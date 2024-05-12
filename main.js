canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    //add new Image()
	img_imgTag = Image() ; 
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	//add  keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90 in if condition
		if(( keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
            //call aplhabetkey();
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}

        // check if condition-  keyPressed >=48 && keyPressed<=57
		else if(keyPressed >=48 && keyPressed<=57)
		{
            //call numberkey();
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("Number key");
		}
		else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed ctrl/esc/alt";
			console.log("special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}
function aplhabetkey()
{
		img_image="alphabet key.png";
		
	add();
	
}
function numberkey()
{
	img_image="number key.png";
	add();
}
function arrowkey()
{
	img_image="arrow key.png";
	add();
}
function specialkey()
{
	img_image="special key.png";
	add();
}
function otherkey()
{
	img_image="other key.png";
	add();
}