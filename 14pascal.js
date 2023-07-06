var n = 5;
var str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        str += ' ';
    }
    for (let j = 0; j < i; j++) {
        str += '*';
    }
    str += '\n';
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        str += ' ';
    }//less spaces there we add 
    for (let j = 0; j < n - i; j++) {
        str += '*';
    }
    str += '\n';
}
console.log(str);