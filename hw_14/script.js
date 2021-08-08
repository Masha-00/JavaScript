//TASK 1
let student = {
    firstName: 'Vasya',
    lastName : 'Pupkin',
    averageScore : 0,
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    isGrantHolder(){
        return this.averageScore >= 4 ? true : false;
    }
}
//function constructor
function Aspirant(firstName, lastName, complete){ 
    this.__proto__ = student; //prototype student
    this.dissertationTopic;
    this.isDissertationComplete = complete; 
    this.firstName = firstName;
    this.lastName = lastName;
    this.isGrantHolder = function(){
        return this.averageScore >= 4.5 && this.isDissertationComplete === true ? true : false;
    }
}
//create object aspirant using function-constructor Aspirant
let aspirant = new Aspirant('Masha', 'Skobeeva', false);
// output all properties and methods of the object
for(let value in aspirant){
    console.log(value);
}
student.averageScore = 4.8;
console.log(student.getFullName(), student.isGrantHolder()); //true
console.log(aspirant.getFullName(), aspirant.isGrantHolder()); //false

//TASK 2
//class
class Plane{
    constructor(name, isFlying = false){
        this.name = name;
        this.isFlying = isFlying;
    }
    takeOff(){
        return this.isFlying = true;
    }
    land(){
        return this.isFlying = false;
    }
}
//Object
const airport  = {
    planes  : [],
    getFlyingPlanes(){
        return this.planes.filter(value => value.isFlying === true); 
    }
}
//created objects based on class
let plane1 = new Plane("First", true);
let plane2 = new Plane("Killer");
let plane3 = new Plane('Boeing', true);
let plane4 = new Plane('Cirrus');
let plane5 = new Plane('Airbus', true);
plane2.takeOff();
plane1.land();
airport.planes.push(plane1, plane2, plane3, plane4, plane5); //add to array
console.log(airport.getFlyingPlanes()); 