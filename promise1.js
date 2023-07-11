function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}
wait(10);
//first 10 seconds for resolving 
//later it is resolved
//promise resolve sets the value to particular resolve and reject
//resolve set promise to some value
//reject set promise as error