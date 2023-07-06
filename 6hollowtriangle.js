var n = 5;
var str = "";
for (var i = 1; i <= n; i++) {
    for (var j = 0; j < i; j++) {
        if (i == n) {
            str += '*';
        }
        else {
            if (j == 0 || j == i - 1) {
                str += '*';
            }//this is first and last column  then add *
            else {
                str += ' ';
            }
        }

    }
    str += '\n';
}
console.log(str);