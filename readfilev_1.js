const fs = require("fs");

function readFile(fileName, cb) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

readFile("readfile.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
//async is the function that return a promise
//await is used to wait until the promise gets resolved
//promise is success or failure of asynchronous function
//if we exclude the utf-8 we get the output in the form of buffer
