import Dog from './dog';
import Cat from './cat';
import Hospital from './hospital';
import Veterinarian from './veterinarian';
import Person from './person';

function main(){
    const hospital = new Hospital('4 legs'); // create hospital
    const veterinarian = new Veterinarian('Ivan', 'Ivanov', hospital); // create doctor
    //add 6 animals
    let Jessica = new Cat('Jessica', 'feed', 'Kharkiv');
    let Rocket = new Cat('Rocket', 'feed', 'Kiev', 15);
    let Tilde = new Cat('Tilde', 'fish', 'Dnieper');
    let Caesar = new Dog('Caesar', 'feed', 'Poltava');
    let Gerda = new Dog('Gerda', 'canned', 'Chernihiv', 30);
    let Tisha = new Dog('Tisha', 'meet', 'Lviv');
    const arrAnimal = [Jessica, Rocket, Tilde, Caesar, Gerda, Tisha];
    // add 10 people
    hospital.addPeople(new Person('Egorov', 'Sergey'),
                    new Person('Dmitrieva', 'Ulyana'),
                    new Person('Spiridonov', 'Marcel'),
                    new Person('Saveliev', 'Daniil'),
                    new Person('Bykov', 'Mikhail'),
                    new Person('Dmitry', 'Petrov'),
                    new Person('Semenova', 'Alisa'),
                    new Person('Isakov', 'Vladislav'),
                    new Person('Zhukova', 'Maria'),
                    new Person('Frolov', 'Grigory')
                    )
    // animals going to the doctor
    arrAnimal.forEach(item => {
        console.group(veterinarian.getFullName());
        console.log(veterinarian.treatAnimal(item));
        console.groupEnd();
    });
    // nickname all animals in hospital
    let illAnimalNicknames = hospital.getAnimals().map(name => ` ${name.nickname}`);
    console.log('Animals in the hospital: ' + illAnimalNicknames);
}
main();


