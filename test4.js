let employee = { 
    name: "David", 
    employeeId: 540327,
    introduction: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
employee.introduction();

for (const property in employee) { 
    console.log(property + ": " + employee[property]); 
}

function sayHi(name) { console.log(`Hello ${name}.`); }

sayHi(employee.name);

sayHi = (name) => console.log(`Hello ${name}.`);

sayHi(employee.name);

employee.introduction = () => 
    console.log(`Hello, my name is ${this.name}`);
employee.introduction();

callback = () => console.log("Sorry I'm late. Hello!")

setTimeout(callback, 1000);

setTimeout(() => console.log("Back from the trip!"), 5000);
