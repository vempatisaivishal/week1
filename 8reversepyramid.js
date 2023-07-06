var n = 5;
var star = "";
for (var i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
        star += ' ';
    }
    for (j = 0; j < 2 * (n - i) - 1; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);