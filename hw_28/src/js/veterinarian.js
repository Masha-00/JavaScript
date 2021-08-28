import Person from "./person";

export default class Veterinarian extends Person{
    #diagnosis = { ill: 'ill', healthy: 'healthy' }
    constructor(firstName, lastName, hospital){
        super(firstName, lastName);
        this.hospital = hospital;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} ${this.hospital.name}`; 
    }
    _setDiagnosis(animal){
        if(animal.weight > 20){
            return{
                diagnosis: this.#diagnosis.ill,
                info: 'overweight',
            }
        } else if (animal.food === 'feed'){
            return{
                diagnosis: this.#diagnosis.ill,
                info: `Change food. Now ${animal.nickname} eats ${animal.changeFood('Meal with rice')}`,
            }
        } else if (animal.isHomless){
            return{
                diagnosis: this.#diagnosis.healthy,
                info: `Change home. Now ${this.hospital.findHome(animal).name} have a new friend - ${animal.nickname}`,
            }
        } else {
            return{
                diagnosis: this.#diagnosis.healthy
            }
        }
    };
    treatAnimal(animal){
        if(this._setDiagnosis(animal).diagnosis === 'ill'){ // if animal ill 
            this.hospital.addAnimal(animal); // add to hospital
            return {
                info: `${animal.nickname} from ${animal.location}`,
                fullDiagnos: `${this._setDiagnosis(animal).diagnosis} : ${this._setDiagnosis(animal).info}`,
            }
        } else {
            return this._setDiagnosis(animal);
        }
    }
}