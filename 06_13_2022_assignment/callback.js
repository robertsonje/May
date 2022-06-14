function getUsers(callback) {
    setTimeout(() => {
        callback( 
            [
                {
                    username:   'John',
                    email:      'abc@com.com'
                },
                {
                    username:   'Kevin',
                    email:      'kbc@com.com'
                }
            ]
        )
    }, 1000);
}

function findUser(userName, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === userName);
        callback(user);
    });
}

findUser('Kevin', console.log);
