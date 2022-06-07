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