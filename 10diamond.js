var str = "";
let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
        str += ' ';
    }
    for (let j = 0; j < (2 * i) - 1; j++) {
        str += '*';
    }
    str += '\n';
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        str += ' ';
    }
    for (let k = ((n - i) * 2) - 1; k > 0; k--) {
        str += '*';
    }
    str += '\n';
}
console.log(str);