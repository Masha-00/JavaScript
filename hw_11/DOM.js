//TASK 1
let childParag = document.querySelectorAll('p');
function changeBackground(elem){
    return elem[childParag.length-1].style.backgroundColor = 'red';
}
changeBackground(childParag);
//change footer and main
let footer = document.querySelector('#footer');
let main = document.querySelector('#main');
function changeBloks(block1, block2){
    return block1.append(block2);
}
changeBloks(main, footer);

//TASK 2
let h1 = document.querySelector('#wrapper-2');
function addFoto(afterWhat){
    let permission = confirm('Add image?'); //question add or not
    if(permission){ //if yes
        let foto = prompt('Enter link', 'https://amicus-vet.ru/images/statii/golubaya.jpg'); //enter link
        let addImg = document.createElement('img'); //create tag img
        addImg.src = foto; //create attribute src
        afterWhat.after(addImg); //add photo to document  
    }
}
addFoto(h1);

//TASK 3    
let number = +prompt('Enter number', 8); //get number inputs
let form = document.querySelector('form'); //get tag form
function createInputs(num){
    for(let index = num; index >= 1; index--){
        let inputs = document.createElement('input'); //create inputs
        inputs.classList.add('input-item'); //add class
        inputs.value = `Input ${index}`; //add value index
        form.prepend(inputs); //add inputs to form
        if(index % 2){ 
            inputs.classList.add('my-class'); //add my class
            inputs.style.backgroundColor = 'yellow'; //add background-color
        }
        if(!(index % 3)){ 
            inputs.value = ''; //clear value
            inputs.placeholder = 'Text'; //add placeholder
        }
        if(index % num === 0){ //last input
            inputs.classList.add('mardin-zero'); //add class
        }
        console.log(inputs);
    }
}
createInputs(number);

//TASK 4
let userNumber = +prompt('Enter number', 5); //get number
function createTable(number){ 
    let matrix = document.querySelector('#matrix'); //get id matrix
    let table = document.createElement('table'); //create tag table
    matrix.append(table); // insert table 
    //create rows
    for(let i = 1; i <= number; i++){
        let tr = document.createElement('tr');
        table.append(tr); //add rows
        //create cols
        for(let j = i; j < number + i; j++){
            let td = document.createElement('td');
            tr.append(td); //add cols
            td.innerHTML = j;
        }
    }
}
createTable(userNumber);
function changeColor(color){
    let table = document.querySelector('table:last-child'); //get last elem in table
    for(let i = table.rows.length-1; i >= 0; i--){
        for(let j = 0; j < table.rows.length; j++){
            if(i + j === table.rows.length-1){
                table.rows[i].cells[j].style.backgroundColor = color; //change color
            }
        }
    }
}
changeColor('blue');
//changeColor('red');