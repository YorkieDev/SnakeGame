// JavaScript Snake Game
// Author - Iain York

var canvas;
var ctx;


var head;
var apple;
var ball;


var dots;
var apple_x;
var apple_y;


var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;


const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 29;
const DELAY = 140;
const C_HEIGHT = 300;
const C_WIDTH = 300;


const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40; 


var x = new Array(ALL_DOTS);
var y = new Array(ALL_DOTS);

// This function loads the canvas.
function init(){
	
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	
	loadImages();
	createSnake();
	locateApple();
	setTimeout("gameCycle()", DELAY);
	}

// This function loads the images used to create the snake.
function loadImages(){
	
	head = new Image()
	head.src = 'head.png';
	
	ball = new Image()
	ball.src = 'ball.png';
	
	apple = new Image()
	apple.src = 'apple.png';
	}
	
// This function creates the body of the snake.
function createSnake(){
	
	dots = 3;
	
	for (var z = 0; z < dots; z++){
		x[z] = 50 - z * 10;
		y[z] = 50;
		
		}
	
	}

// This function checks the location of the Apple. 
function checkApple(){
	if ((x[0] == apple_x) && (y[0] == apple_y)){
		dots++
		locateApple();
		}
	
	}
	
function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {

        ctx.drawImage(apple, apple_x, apple_y);

        for (var z = 0; z < dots; z++) {
            
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }    
    } else {

        gameOver();
    }        
}

// This function covers the terms for the gameOver conditions	
function gameOver(){
	ctx.fillStyle = 'white';
	ctx.textBaseLine = 'middle';
	ctx.textAlign = 'center';
	ctx.font = 'normal bold 18px serif';
	
    ctx.fillText('Game over', C_WIDTH/2, C_HEIGHT/2);
	}

// This function checks where the Apple is. 	
function checkApple(){
	if ((x[0] == apple_x) && (y[0] == apple_y)){
		
		dots++;
		locateApple();
		}
	}

// This function controls the input of the arrow keys on the keyboard. 
function move(){
	for (var z = dots; z > 0; z--){
		x[z] = x[z-1];
		y[z] = y[z-1];
		}
		
	if (leftDirection){
		x[0] -= DOT_SIZE;
		}
	if (rightDirection){
		x[0] += DOT_SIZE;
		}
	if (upDirection) {
		y[0] -= DOT_SIZE;
		}
	if (downDirection){
		y[0] += DOT_SIZE;
		}
	}

// This function is used to detect collisions.
function checkCollision(){
	for  (var z = dots; z > 0; z--){
		if((z > 4) && (x[0] == x[z]) && (y[0] == y[z])){
			inGame = false;}
		}
	if (y[0] >= C_HEIGHT){
		inGame = false;
		}
	if (y[0] < 0){
		inGame = false;
		}
	if (x[0] >= C_WIDTH){
		inGame = false;
		}
	if (x[0] < 0){
		inGame = false;
		}
	}


// This function is used to locate the Apple.
function locateApple(){
	
	var r = Math.floor(Math.random() * MAX_RAND);
	apple_x  = r * DOT_SIZE;
	
	r = Math.floor(Math.random() * MAX_RAND);
	apple_y = r * DOT_SIZE;
	
	}

// This function is for the Game Cycle. 
function gameCycle(){
	
	if inGame(){
	   checkApple();
	   checkCollision;
	   move();
	   doDrawing();
	   setTimeout("gameCycle()", DELAY);
		}
	
	}
// This section is for the controls.
onkeydown = function(e){
	var key = e.keyCode;
	
	if((key == LEFT_KEY) && (!rightDirection)){
		leftDirection = true;
		upDirection = false;
		downDirection = false;
		}
	if((key == RIGHT_KEY) && (!leftDirection)){
		rightDirection = true;
		upDirection = false;
		downDirection = false;
		}
	if((key == UP_KEY) && (!downDirection)){
		upDirection = true;
		rightDirection = false;
		leftDirection = false;
		}
	if((key == DOWN_KEY) && (!upDirection)){
		downDirection = true;
		rightDirection = false;
		leftDirection = false;
		}
	};
