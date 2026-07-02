let name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHasHobby);
}


const add =  (a, b) => {
    return a + b;
}

console.log(add(1, 2));


console.log(summarizeUser(name, age, hasHobbies));


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi I am' , this.name);
        return this.name;
    }
};

console.log(person.greet());

person.greet();

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

const copiedArray = [...hobbies];

console.log(copiedArray);
console.log(hobbies.map((h) => console.log("the data is" + h)));

console.log(hobbies);

const copiedPerson = {...person};

console.log(copiedPerson);

const toArray = (...values) => {
    return values;
}

console.log(toArray(1, 2, 3, 4, 5));


const printName = ({name}) => {
console.log(name);
}

printName(person);