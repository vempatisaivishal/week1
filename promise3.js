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
    const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
    const start = Date.now();
    Promise.all(promises).then(() => {
      const end = Date.now();
      console.log(`total time ${end - start} milli seconds taken`);
    });
  }
calculateTime();//calling function
//here calculate Time sending 3 promises 
//start time is Date.now()
//promise.all is all after resolving 
//we take time left end-start