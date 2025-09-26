let count = 0;
function strg(msg) {
    for(let val of msg) {
        if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u") {
            count++;
        }
    }
    return count;
}
console.log(strg("a, e, i, o, u are the vovels"));

