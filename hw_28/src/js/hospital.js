export default class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];
    constructor(name){
        this.name = name;
    }
    getAnimals(){
        return this.#illAnimals;
    }
    getFindingPetsPeople(){
        return this.#findingPetsPeople;
    }
    addAnimal(animal){
        this.#illAnimals.push(animal);
    }
    addPeople(...people){
        this.#findingPetsPeople = [...this.#findingPetsPeople, ...people]; 
    }
    findHome(animal){ 
        let animalInHospital = this.#illAnimals.find(item => item.nickname === animal.nickname); //check is animal in hospital
        if(animalInHospital){
            return {
                status: 'restricted',
                message: `We need to heal ${animal.nickname} firstly`
            };
        } else {
            //delete random person from array
            let random = this.#findingPetsPeople.splice(Math.floor(Math.random() * this.#findingPetsPeople.length), 1)[0].getFullName();
            return {
                status: 'success',
                name: random //inser random person
            };
        }
    }   
}