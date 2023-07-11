const moment = require("moment");
const uI = 1000; //->1 sec
const indianFormat = "hh:mm:ss a";
const internationalFormat = "HH:mm:ss";
function printTime(format) {
    const time = new Date();
    const fTime = moment(time).format(format);
    console.log(fTime);
}

const main = async () => {
    //calling async
    setInterval(() => {
        printTime(indianFormat);
        printTime(internationalFormat);
    }, uI);
};

main();
//just install npm moment to get  the time