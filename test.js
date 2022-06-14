// This is mostly throwaway code for testing concepts learned in the JavaScript training.

let employee = {
    firstName: 'Carlos',
    lastName: 'Green',
    age: 43,
    department: 'sales'
}

for(const key in employee) {
    console.log(key + ': ' + employee[key] + " (typeof " + key + " is " + typeof employee[key] + ")");
}

let student = {
    name: "Jehrick",
    class: "Civics",
    grade: 83
}

student.rollNo = 45;

for(const key in student) {
    console.log(key + ': ' + student[key] + " (typeof " + key + " is " + typeof student[key] + ")");
}

let name = "Mark";
console.log(name + 12);
console.log(name + 12 + 3);
console.log(name + (12+3));
console.log(12+2 + name);

console.log(this);
function f() {
    return this;
}
console.log(f());

const obj1 = {
    foo: function() {
        const baz = () => this;
            return baz;
    },
    bar: () => this
}

console.log(obj1.foo);
console.log(obj1.bar);

function getItems() {
    return null;
}

let [a = 10, b = 20] = getItems() || [];
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b,
        a*a + 2*a*b + b*b
    ];
}

console.log(stat(35,50));

const getProfile = () => {
    return [
        'Dave',
        'Caravello',
        ['Red', 'Green', 'Blue']
    ]
}


let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();
console.log("My name is " + firstName + " " + lastName + ". My favorite colors are " + color1 + ", " + color2 + ", and " + color3 + ".");

let [firstName1,
...rest] = getProfile();

console.log(rest);

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

function getPerson() {
    return null;
}

