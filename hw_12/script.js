//TASK 1 
function search(){
    let input = document.querySelector('#search'); //get input
    let li = document.querySelectorAll('li'); //get all li
    let p = document.querySelector('#filmsCount'); //get output
    input.addEventListener('input', filmSearch); //add event input
    function filmSearch(event){ 
        let count = []; //array for count the number of matches
        let value = event.target.value; //link on input
        for(let i = 0; i < li.length; i++){
            if(value.split(' ').join('') === ''){ //check on empty string
                p.innerHTML = '0'; //if true output 0
            } else if(li[i].textContent.startsWith(value)){ //check elements
                count.push(li[i].textContent); //if it true add to array
                p.innerHTML = count.length; //count the number of elements in the array and output to p
            }
        }
    }
}
search();


//TASK 2
const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
};

function addList(){
    let menu = document.querySelector('#menu'); //get ul
    menu.addEventListener('click', addOL); //add event click
    function addOL(event){
        let ingredients = INGREDIENTS[event.target.textContent]; //find where was event
        let ol = document.createElement('ol'); //create ol
        if(ingredients){
            for(let elem of ingredients){
                let li = document.createElement('li'); //create li
                let text = document.createTextNode(elem); //created a text node
                li.appendChild(text); //add text to li
                ol.appendChild(li); //add li to ol
            }
            event.target.appendChild(ol); //add last node to elem which was click
        } else{
            // find where was click and get list ol add class toggle for open and close list
            event.target.querySelector('ol').classList.toggle('hide');
        }
    }
}
addList();

//TASK 3
let buttonStart = document.createElement('button'); // create btn start
buttonStart.id = 'start'; //add id
buttonStart.innerHTML = 'Start'; //add text
let buttonStop = document.createElement('button'); //create btn stop
buttonStop.id = "stop"; //add id
buttonStop.innerHTML = 'Stop'; //add text
document.body.appendChild(buttonStart); //add btn start to HTML
document.body.appendChild(buttonStop); //add btn stop to HTML
let h2 = document.createElement('h2');  //create h2
document.body.appendChild(h2); ////add h2 to HTML
let timerId; //for timer
function timer(){
    let hours = new Date().getHours(); //get hours
    if (hours < 10) hours = "0" + hours; 
    let min = new Date().getMinutes();
    if (min < 10) min = "0" + min;
    let sec = new Date().getSeconds();
    if (sec < 10) sec = "0" + sec;
    h2.innerHTML = "" + hours + ":" + min + ":" + sec; //add time to h2
}
setInterval(timer()); //interval for timer
let start = document.querySelector('#start'); //get id btn start
let stop = document.querySelector('#stop'); //get id btn stop
start.addEventListener('click', function(){ //event to btn start to update clock
    timerId = setInterval(function(){
        timer();
    }, 1000);
})
stop.addEventListener('click', function(){ //event to stop update clock
    clearInterval(timerId); 
})