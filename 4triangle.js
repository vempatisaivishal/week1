var n = 5;
var str = "";
for (var i = 1; i <= n; i++) {

    for (var j = 1; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}
console.log(str);