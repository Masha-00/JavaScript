const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const btnStart = document.querySelector('.start'); //button start
const btnStop = document.querySelector('.stop'); //button stop
const score = document.querySelector('#score'); //score

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

let squares = []; //array squares
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

btnStart.addEventListener('click', start); //when button start click function start work

function start(){
	setInterval(createSquare, getRandomNumber(500, 2000)); //create square with random interval
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
function animate() {
	// your code should be started here 
	drawSquare()
	requestAnimationFrame(animate); //make animation
}

canvas.addEventListener('click', (event) => { });
document.body.onload = animate;
