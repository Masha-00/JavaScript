//TASK 1
let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function() {
    // write your code here
    setTimeout(() => console.log(this.message), 3000);
  },
}
coffeeMachine.start(); // 'Your coffee is ready!'
// 2
let teaPlease = {
 message: 'Wanna some tea instead of coffee?',
}
let result = coffeeMachine.start.bind(teaPlease);
result();

//TASK 2 
function concatStr(str1, separator, str2) {
  return (str1 + separator + str2).toString();
}
console.log(concatStr('Hello', ' ', 'Matt')); // 'Hello Matt'
let hello = concatStr.bind(null,'Hello', ' ')
console.log(hello('Matt')); // 'Hello Matt'
console.log(hello('John')); // 'Hello John'

//TASK 3 
function showNumbers(from , to, interval){
  let rez = from;
  let timerId = setInterval(function(){
    console.log(rez);
    ++rez;
    if(rez === to+1){
      clearInterval(timerId);
    }
  }, interval);
}
showNumbers(5, 10, 500);
//upd
function showNumbers1(from , to, interval){
  let rez = from;
  setTimeout(function start(){
    console.log(rez);
    if(rez < to){
      setTimeout(start, interval);
    }
    rez++;
  }, interval);
}
showNumbers1(5, 10, 500);
//TASK 4
function addBase(base) {  //base=1
  return function (num) { 
    return base + num;  //1+5 + 1+3 = 10
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3)); // 10
/*Функция addBase имеет единственный аргумент со значением 1. Анонимная функция внутри 
неё создает замыкание, таким способом можем использовать её несколько раз, прибалять к 
её аргументу значения записаные в alert. 
Так в alert получается (1+5) + (1+3) = 6+4 = 10*/