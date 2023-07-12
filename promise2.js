function sleep(seconds) {
    let startTime = Date.now();
    while (Date.now() - startTime < seconds * 1000) {
    }
}
function main() {
    sleep(2);
    console.log("Done sleeping");
}
//this is Date.now()-startTime<seconds*1000
//2*1000 is waiting for 2 seconds
main();