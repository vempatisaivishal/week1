var n = 5;
var star = "";
for (var i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        star += ' ';
    }
    for (k = 0; k < (2 * i) - 1; k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);