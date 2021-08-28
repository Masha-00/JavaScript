import Animal from './animal';

export default class Dog extends Animal {
    constructor(nickname, food, location, weight){
        super(nickname, food, location);
        this.weight = weight;
    }
}