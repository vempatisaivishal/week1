const fs = require("fs");

function readFileAndRemoveExtraSpaces(fileName, cb) {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            cb(err);
        } else {
            const noExtraSpaces = data.replace(/\s+/g, " ");
            fs.writeFile(fileName, noExtraSpaces, (err) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null);
                }
            });
        }
    });
}

readFileAndRemoveExtraSpaces("spaces.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File updated successfully!");
    }
});