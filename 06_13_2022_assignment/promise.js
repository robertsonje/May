let users = 
[
    {
        username:   'John',
        email:      'abc@com.com'
    },
    {
        username:   'Kevin',
        email:      'kbc@com.com'
    }
];

function findUser(userName) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.username === userName);
            if (user) {
                resolve(`Found information on user ${userName}: ${JSON.stringify(user)}`);
            } else {
                reject(`User not found: ${userName}`);
            }
        }, 1000);
    }).then((OK) => {
        console.log(OK);
    }).catch((err) => {
        console.log(err);
    });
}

findUser("Kevin");
findUser("Joe");
findUser("John");
findUser("Mike");