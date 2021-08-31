// TASK 1
function difference(){
    let startTime = Math.round(Date.now()); 
    return function () {
        let newTime = Math.round(Date.now());
        startTime = Math.round((newTime - startTime) / 1000);
        if (startTime === 0) {
            console.log('Enabled');
            startTime = newTime;
        } else {
            console.log(`${startTime} seconds have passed`);
            startTime = newTime;
        }
    }
}
let getTime = difference();
setTimeout(() => getTime());
setTimeout(() => getTime(), 2000);
setTimeout(() => getTime(), 5000);
setTimeout(() => getTime(), 65000);

// TASK 2
const timer = time => {
    let time1 = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        console.log(`0${minutes}:${seconds}`);
        time--; 
        if(time === 0){
            console.log('Timer End');
            clearInterval(time1);
        }
    }, 1000);
} 
// timer(120);
timer(59);
