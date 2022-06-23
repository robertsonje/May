// This is mostly throwaway code for testing concepts learned in the JavaScript training.

"use strict"

let person = {
    firstName: 'John',
    middleInitial: 'C',
    lastName: 'Doe'
};

let fName = 'Mike';
let lName = 'Brown';

function square(x) {
    x = x*x;
    return x;
}

let y = 10;
let result = square(y);
console.log(y);
console.log(result);

function turnOn(machine) {
    machine.isOn = true;
}

function turnOnAlternate(machine) {
    machine = {
        isOn: true
    };
    return machine;
}

var computer = {
    isOn: false
};

turnOnAlternate(computer);
console.log(computer.isOn);
console.log(turnOnAlternate(computer).isOn);
turnOn(computer);
console.log(computer.isOn);

let {firstName: fname, middleInitial: mInitial, lastName: lname, currentAge: age = 28} = person;
console.log(fname);
console.log(mInitial);
console.log(lname);
console.log(age);
console.log('currentAge' in person);

let show = ({firstName, lastName, ...args}) => {
    console.log(args);
    console.log(firstName + ' ' + lastName);
}

show(person);

let employee = {
    eName: 'David',
    address: '123 Fake Street',
    eid: '548230',
    company: 'Power Tools',
    role: {
        team: 'Tools Team',
        organization: 'Drive Division'
    },
    //introduction: function() { console.log(`Hello, my name is ${this.eName}`) }// Illegal, throws an error
}

employee.introduction = () => console.log(`Hello, my name is ${this.eName}`) // Illegal, throws an error

// Resulting code for destructuring this object
let {eName, address, eid, company, role: {team, organization}} = employee;
console.log(`${eName} from ${address}, with an employee id of ${eid}, works in the ${organization} of ${company} as a member of the ${team}.`);
employee.introduction();
console.log(`${turnOn} ${typeof turnOn} ${turnOn.prototype}`);

const person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

let result2 = greet.apply(person2, ['Hello', 'How are you?']);
console.log(result2);

const computer2 = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `the ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `the ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result3 = computer2.turnOn.apply(server);
console.log(result3);

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr);

function show2() {
    console.log('Show2 function');
}

show2();

var greeting = 'Hi';
var messenger = {
    greeting: 'Hello'
};

function say(name){
    console.log(this.greeting + ' ' + name);
}

say.call(globalThis, 'John');
say.call(messenger, 'John');