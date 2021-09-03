import students from './students';
// function create id
function getId(){
    let id = 0;
    return function(){
        return ++id;
    }
}
let getStudentId = getId();

class Student {
    id = getStudentId();
    isSelfPayment = true;
    constructor({ name, surname, ratingPoint, schoolPoint } = enrollee){
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
    }
}

class University {
    #allStudents = []; // array all students
    constructor(name){
        this.name = name;
    }
    // add student method
    addStudent(student){
        this.#allStudents.push(student); // add to array
        // sort students
        this.#allStudents.sort((a, b) => (b.ratingPoint + b.schoolPoint) - (a.ratingPoint + a.schoolPoint));
        // check
        if(student.ratingPoint >= 800 && (this.#allStudents.length <= 5)){
            student.isSelfPayment = false; 
        }
    }
    // Enrolled students
    getEnrolledStudents(){
        return this.#allStudents;
    }
    // Students who study on budget
    getStudentsOnBudget(){
        return this.#allStudents.filter(item => item.isSelfPayment === false);
    }
}

const university = new University ('KhPI');
students.map(student => {
    university.addStudent(new Student(student));
});

console.log('Students who were enrolled in the university', university.getEnrolledStudents()); // all students
console.log('Students who are enrolled on a budget', university.getStudentsOnBudget()); // students who study on buget