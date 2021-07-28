//TASK 1
let vegetable = {
    name : 'onion',
    color : 'white',
}
const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`); //"onions are usually white"
//TASK 2
vegetable.shape = 'round';
const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`); //"onions are usually round"
//TASK 3
let vegetables = [
    {
        name : 'cucumber',
        color : 'green',
    },
    {
        name : 'tomato',
        color : 'red',
    }
];
const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`); //"cucumbers are usually green"
console.log(`${tomato.name}s are usually ${tomato.color}`); //"tomatos are usually red"
//TASK 4
let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
  ];
const [first, second, ...continued] = students;
console.log(second);
console.log(continued.length);