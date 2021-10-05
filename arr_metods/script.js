// TASK 1
const arr = ['Vasya', 'Petya', 'Alexey'];
function removeUser(arr, index){
    return arr.splice(index, 1);
}
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']

// TASK 2
class Candidate {
    constructor({address}){
        this.address = address;
    }
    state(){
        return this.address.split(', ').splice(2, 1).join();
    }
}
const candidate = new Candidate(condidateArr[0])
console.log(candidate.state()); // Colorado

// TASK 3
function getCompanyNames(){
    return new Set(condidateArr.map(item => item.company));
}
console.log(getCompanyNames()); 

// TASK 4
function getUserByYear(year){
    let array = [];
    // take the first part of the array and compare with the year
    condidateArr.forEach(item => {
        let fisrtPart = Number(item.registered.split('-')[0]);
        if(fisrtPart === year){
            array.push(item['_id']);
        }
    })
    return array;
}
console.log(getUserByYear(2017));

// TASK 5
function getCandidatesByUnreadMsg(number){
    return condidateArr.filter(item => 
        parseInt(item.greeting.match(/\d+/)) === number
    );
}
console.log(getCandidatesByUnreadMsg(8));

// TASK 6
function searchCandidatesByPhoneNumber(phone){
    return condidateArr.filter(candidate => candidate.phone.includes(phone))
}
console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1 (927) 429-3746'));

// TASK 7
const getEyeColorMap = () => {
    const newObj = new Map(); // create new array

    condidateArr.forEach(item => newObj.set(item.eyeColor, [])); // get colors eyes
    for(const [key, value] of newObj.entries()){ // fill array values which match
        condidateArr.forEach(item => {
          item.eyeColor === key ? value.push(item) : 0;
        })
    }
    return newObj;
}
console.log(getEyeColorMap());