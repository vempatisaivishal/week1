function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}
function calculateTime() {
    const start = Date.now();
    waitOneSecond();
    waitTwoSecond();
    waitThreeSecond();
    const end = Date.now();
    console.log(`It took ${end - start} ms`);
}
//here I called each function individually then looking the time it is taking
//time taken milliseconds 
calculateTime();//this is function calling
//here we are calling function sequentially then taking more time
//if calling all at a time then return less time