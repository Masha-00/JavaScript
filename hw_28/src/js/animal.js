export default class Animal {
    constructor(nickname, food, location){
        this.nickname = nickname;
        this.food = food;
        this.location = location;
    }
    changeFood(){
        return 'meal with rice';
    }
}