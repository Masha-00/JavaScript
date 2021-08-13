const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = getRandonNumber(1, 6);
        let rez = number >= 1 && number <= 5 ? `Start the game ${number}` : reject(number);
        console.log(rez);
        resolve(number);
        //reject(number);
    }, 2000);
  });

promise1
    .then(number => {
        let rez1 = number === 1 ? 'Stay here' : `Go ${number} steps`;
        console.log(rez1);
    })
    .catch(error => { //!!!
        console.error('Exit', error);
    });
// function random number
function getRandonNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }