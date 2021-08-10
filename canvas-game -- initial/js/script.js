const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const btnStart = document.querySelector('.start'); //button start
const btnStop = document.querySelector('.stop'); //button stop
const score = document.querySelector('#score'); //score
let squares = []; //array squares
let timer; 

//random number
function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max + 1 - min) + min);
}
//random speed
function getRandomSpeed(min, max){
	return Math.random() * (max - min) + min;
}
//random color
function getRandomColor(){
	//return Math.floor(Math.random() * 16777215).toString(16);
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//create square
function createSquare(){
	//object square
	let square = {
		x : getRandomNumber(0, 600), 
		y : 0, 
		width : 40,
		height : 40,
		color : getRandomColor(),
		speed : getRandomSpeed(0.5, 1),
	};
	squares.push(square); //add square to array squares
}

function start(){
	timer = setInterval(createSquare, getRandomNumber(500, 2000)); //create square with random interval
}
//draw squares
function drawSquare(){
	ctx.clearRect(0, 0, canvas.width, canvas.height); //clear any previously drawn content
	for(let i in squares){
		ctx.beginPath(); //starts a new path, omitting the list of subpaths
		ctx.rect(squares[i].x, squares[i].y, squares[i].width, squares[i].height); //creates the outline of a rectangle
		ctx.fillStyle = squares[i].color; //sets color and style
		ctx.fill(); //fills the square with color
		ctx.closePath(); //adds a line to the path from the current to the original point under the path and closes the path itself
		squares[i].y += squares[i].speed; //I set the speed of movement along the axis Y
	}
}
//delete square	
function deleteSquare(coordinate){
	for(let i in squares){
		if(squares[i].x <= coordinate.offsetX && squares[i].x + 40 >= coordinate.offsetX && squares[i].y <= coordinate.offsetY && squares[i].y + 40 >= coordinate.offsetY){
			squares.splice(squares.indexOf(squares[i]), 1); //delete click square
			score.innerHTML++; //score +1
		}
	}
}
//clear timer	
function stop(){
	clearInterval(timer); //clear interval
	score.innerHTML = 0; //score = 0
	squares.splice(0, squares.length); //clear array
}
function animate() {
	// your code should be started here 
	drawSquare();
	requestAnimationFrame(animate); //make animation
}

btnStart.addEventListener('click', start); //when button start click function start work
btnStop.addEventListener('click', stop); //when button stop click function stop clear timer
canvas.addEventListener('click', deleteSquare); //when on square click it delete and score +1
document.body.onload = animate;
