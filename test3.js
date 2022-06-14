let TestFunc = () => {
    console.log('first');
    setTimeout(() => console.log('fourth'), 2000);
    console.log('second');
    setTimeout(() => console.log('third'), 1500);
}

TestFunc();

let order = (call_production) => {
    console.log("Order placed. Please call production") // function being called
    call_production();
};
order(() => console.log("Production has started"));

function getUsers() {
    return [
        { username: 'John', email: 'john@test.com'},
        { username: 'Mark', email: 'mark@test.com'}
    ];
}

function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('John'));

let done = true;
let isItDone = new Promise((resolve, reject) => {
    if (done) {
        const success = 'Got the data...';
        resolve(success);
    } else {
        const failure = "Didn't get the data..."
        reject(failure);
    }
});

const check = () => {
    isItDone.then(ok => console.log(ok)).catch(err => console.log(err));
}

check();