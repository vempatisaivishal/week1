function calculateTime(n) {
    const startTime = new Date();

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000; // Calculate the elapsed time in seconds

    return elapsedTime;
}
console.log(calculateTime(100));
console.log(calculateTime(100000000));
//above is always max rounded to 0