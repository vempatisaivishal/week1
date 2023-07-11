const fs = require("fs");

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, "utf8", (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function main() {
    const fileName = "writingfile.txt";
    const data = "just learning the open source newly";

    try {
        await writeFile(fileName, data);//await always at last we write
        console.log("File written successfully!");
    } catch (err) {
        console.log(err);
    }
}

main();
//try is to execute function 
//catch is used to handle the error