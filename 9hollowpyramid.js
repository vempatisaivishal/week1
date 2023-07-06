var n = 5;
var str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += ' ';
    }
    for (let j = 0; j < (2 * i) - 1; j++) {
        if (i == 1 || i == n)//first row full of *
        {
            str += '*';
        }
        else {
            if (j == 0 || j == (2 * i) - 2) {
                str += '*';
            }
            else {
                str += ' ';
            }
        }
    }
    str += '\n';
}
console.log(str);